"use client"
import React, { useState } from 'react';
import { useChat } from '@/hooks/usechat';
import styles from './InputBar.module.css';

export default function InputBar() {
  const [input, setInput] = useState('');
  const { send, isStreaming } = useChat();

  const handleSend = () => {
    if (input.trim()) {
      send(input);
      setInput('');
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <textarea
          className={styles.textarea}
          placeholder="Command NEXUS AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
        />
        <button 
          className={styles.sendBtn} 
          onClick={handleSend} 
          disabled={isStreaming || !input.trim()}
        >
          ➤
        </button>
      </div>
    </div>
  );
}