"use client"
import { useChatStore } from '@/store/chatStore';
import { useModeStore } from '@/store/modeStore';
import { Message } from '@/types/chat.types';

export function useChat() {
  const { messages, addMessage, appendToLast, setStreaming, isStreaming } = useChatStore();
  const { mode } = useModeStore();

  const send = async (text: string) => {
    if (!text.trim() || isStreaming) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      mode,
      timestamp: Date.now(),
    };
    addMessage(userMsg);

    // 2. Add Empty Assistant Message for Streaming
    const assistantId = (Date.now() + 1).toString();
    addMessage({
      id: assistantId,
      role: 'assistant',
      content: '',
      mode,
      timestamp: Date.now(),
    });

    setStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          mode,
          history: messages.slice(-10).map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) return;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        appendToLast(chunk);
      }
    } catch (error) {
      appendToLast("Error: Could not connect to the AI core.");
    } finally {
      setStreaming(false);
    }
  };

  return { send, isStreaming, messages };
}
// Inside useChat.ts
const { speak } = useVoice();

// Inside the send function, after the stream completes:
if (mode === 'jarvis') {
  speak(fullContent); // assistant content
}