"use client"
import React from 'react';
import styles from './WaveformVisualizer.module.css';

export default function WaveformVisualizer({ active }: { active: boolean }) {
  if (!active) return null;
  
  return (
    <div className={styles.waveform}>
      {[...Array(12)].map((_, i) => (
        <div key={i} className={styles.bar} style={{ animationDelay: `${i * 0.1}s` }}></div>
      ))}
    </div>
  );
}