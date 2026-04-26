"use client"
import React from 'react';
import styles from './ImagePreview.module.css';

interface Props { url: string; prompt?: string; }

export default function ImagePreview({ url, prompt }: Props) {
  return (
    <div className={styles.container}>
      <img src={url} alt="AI Generated" className={styles.image} />
      {prompt && <p className={styles.caption}>{prompt}</p>}
      <a href={url} target="_blank" download className={styles.download}>
        Download Character 📥
      </a>
    </div>
  );
}