"use client"
import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import ModeSelector from '@/components/ui/ModeSelector';
import ChatWindow from '@/components/chat/ChatWindow';

export default function Home() {
  return (
    <div className="app-shell" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main className="main-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <ModeSelector />
        <ChatWindow />
      </main>
    </div>
  );
}

// Inside src/app/page.tsx
import InputBar from '@/components/chat/InputBar';

// Update the return statement:
<main className="main-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
  <ModeSelector />
  <ChatWindow />
  <InputBar /> {/* Add this line */}
</main>