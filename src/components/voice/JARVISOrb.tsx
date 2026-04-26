"use client"
import React from 'react';
import styles from './JARVISOrb.module.css';

interface Props { active?: boolean; speaking?: boolean; }

export default function JARVISOrb({ active, speaking }: Props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.ring} ${styles.ring1}`}></div>
      <div className={`${styles.ring} ${styles.ring2}`}></div>
      <div className={`${styles.orb} ${active ? styles.active : ''} ${speaking ? styles.speaking : ''}`}></div>
    </div>
  );
}