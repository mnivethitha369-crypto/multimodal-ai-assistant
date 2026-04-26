"use client"
import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import ModeSelector from '@/components/ui/ModeSelector';
import ChatWindow from '@/components/chat/ChatWindow';
import InputBar from '@/components/chat/InputBar';

export default function Home() {
  return (
    <div className="app-shell" style={{ display: 'flex', height: '100vh', background: 'var(--bg)' }}>
      <Sidebar />
      <main className="main-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <ModeSelector />
        <ChatWindow />
        <InputBar />
      </main>
    </div>
  );
}