"use client"
import React from 'react';
import { MODE_META } from '@/types/mode.types'; // Fixed: lowercase 'm'
import { useModeStore } from '@/store/modeStore'; // Fixed: lowercase 'm'
import styles from './ModeSelector.module.css';

export default function ModeSelector() {
  const { mode, setMode } = useModeStore();

  return (
    <div className={styles.bar}>
      {(Object.keys(MODE_META) as Array<keyof typeof MODE_META>).map((m) => (
        <button
          key={m}
          className={`${styles.btn} ${mode === m ? styles.active : ''}`}
          onClick={() => setMode(m)}
          style={{ '--accent-color': MODE_META[m].color } as React.CSSProperties}
        >
          <span>{MODE_META[m].icon}</span>
          <span>{MODE_META[m].label}</span>
        </button>
      ))}
    </div>
  );
}
