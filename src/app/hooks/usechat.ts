import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function send(userMessage: string) {
    const history = messages;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage, history }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let full = '';
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      full += decoder.decode(value);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'assistant', content: full };
        return updated;
      });
    }
    setLoading(false);
  }

  return { messages, send, loading };
}