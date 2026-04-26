"use client"
import React, { useRef } from 'react';
import styles from './MediaUploader.module.css';

export default function MediaUploader({ onFile }: { onFile: (file: File) => void }) {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
  };

  return (
    <div className={styles.uploader} onClick={() => fileInput.current?.click()}>
      <input 
        type="file" 
        ref={fileInput} 
        style={{ display: 'none' }} 
        onChange={handleChange}
        accept="image/*,application/pdf"
      />
      <span className={styles.icon}>📎</span>
      <span className={styles.text}>Upload Assets</span>
    </div>
  );
}