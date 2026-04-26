"use client"
import { useState } from 'react';
import { useChatStore } from '@/store/chatStore';
import { useModeStore } from '@/store/modeStore';
import { nanoid } from '@/lib/utils';

export function useChat() {
  const { messages, addMessage, setStreaming, isStreaming } = useChatStore();
  const { mode } = useModeStore();
  const [error, setError] = useState<string | null>(null);

  const send = async (content: string) => {
    if (!content.trim()) return;

    setError(null);
    const userMsg = { id: nanoid(), role: 'user', content, timestamp: Date.now() };
    addMessage(userMsg as any);
    setStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, history: messages, mode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.content || 'NEXUS Core connection failed.');
      }

      const data = await response.json();
      const assistantMsg = { 
        id: nanoid(), 
        role: 'assistant', 
        content: data.content, 
        timestamp: Date.now()
      };
      addMessage(assistantMsg as any);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setStreaming(false);
    }
  };

  return { send, error, isStreaming };
}
