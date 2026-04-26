"use client"
import React, { useEffect, useRef } from 'react';
import { useChatStore } from '@/store/Chatstore';
import JARVISOrb from '@/components/voice/JARVISOrb';
import styles from './ChatWindow.module.css';

export default function ChatWindow() {
  const { messages, isStreaming } = useChatStore();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className={styles.empty}>
        <JARVISOrb active />
        <h2 className={styles.title}>NEXUS AI ONLINE</h2>
        <div className={styles.suggestions}>
          <button className={styles.suggestion}>💬 Chat: Explain quantum computing</button>
          <button className={styles.suggestion}>🤖 Jarvis mode: What is the time?</button>
          <button className={styles.suggestion}>🎨 image: a cyberpunk city</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.window}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <div key={msg.id} className={styles.messageRow}>
            {msg.content}
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
}