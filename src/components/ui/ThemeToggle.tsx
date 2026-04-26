"use client"
import React from 'react';

export default function ThemeToggle() {
  return (
    <button 
      style={{ 
        background: 'none', 
        border: '1px solid var(--border)', 
        color: 'var(--text-dim)', 
        padding: '4px 8px', 
        borderRadius: '4px',
        fontSize: '10px',
        cursor: 'pointer'
      }}
    >
      🌙 DARK MODE
    </button>
  );
}