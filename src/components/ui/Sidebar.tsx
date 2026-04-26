"use client"
import React from 'react';
import { useModeStore } from '@/store/modeStore'; // Fixed: lowercase 'm'
import { MODE_META } from '@/types/mode.types';   // Fixed: lowercase 'm'
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { mode } = useModeStore();
  
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>NEXUS AI</div>
      <nav className={styles.nav}>
        {/* Navigation links go here */}
      </nav>
      <div className={styles.activeMode}>
        <div 
          className={styles.indicator} 
          style={{ backgroundColor: MODE_META[mode].color }}
        />
        <span>{MODE_META[mode].label} Mode</span>
      </div>
    </aside>
  );
}