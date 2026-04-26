"use client"
import React from 'react';
import styles from './JARVISOrb.module.css';

interface Props { active?: boolean; speaking?: boolean; }

export default function JARVISOrb({ active = true, speaking = false }: Props) {
  return (
    <div className={`${styles.container} ${active ? styles.active : ''} ${speaking ? styles.speaking : ''}`}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.core}></div>
    </div>
  );
}