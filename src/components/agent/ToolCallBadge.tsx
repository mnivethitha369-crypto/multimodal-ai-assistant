"use client"
import React from 'react';
import styles from './ToolCallBadge.module.css';

export default function ToolCallBadge({ tool, status }: { tool: string, status?: string }) {
  return (
    <div className={`${styles.badge} ${status ? styles[status] : ''}`}>
      <span className={styles.icon}>🔧</span>
      <span className={styles.name}>{tool}</span>
      {status && <span className={styles.status}>• {status}</span>}
    </div>
  );
}