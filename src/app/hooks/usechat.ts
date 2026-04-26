// src/app/hooks/usechat.ts
import { useChatStore } from '@/store/chatStore';

export function useChat() {
  const { messages, addMessage, appendToLast, setStreaming } = useChatStore();

  async function send(userMessage: string) {
    const history = messages.slice(-10); // Keep context brief
    addMessage({ role: 'user', content: userMessage });
    addMessage({ role: 'assistant', content: '' });
    setStreaming(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage, history }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      appendToLast(decoder.decode(value));
    }
    setStreaming(false);
  }

  return { messages, send };
}