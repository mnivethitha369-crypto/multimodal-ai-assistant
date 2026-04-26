"use client"
import React from 'react';
import styles from './Sidebar.module.css';
import { useModeStore } from '@/store/modeStore';

export default function Sidebar() {
  const { mode } = useModeStore();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.orbMini}></div>
        <span className={styles.logoText}>NEXUS<span className={styles.accent}>.AI</span></span>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.navItem}>🧠 Memory</div>
        <div className={styles.navItem}>🕓 History</div>
        <div className={styles.navItem}>⚙️ Settings</div>
      </nav>

      <div className={styles.footer}>
        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>System Online</span>
        </div>
        <div className={styles.modeIndicator}>Mode: {mode.toUpperCase()}</div>
      </div>
    </aside>
  );
}