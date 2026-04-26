"use client"
import React from 'react';
import styles from './VideoStoryboard.module.css';

interface Scene {
  id: number;
  description: string;
  angle: string;
  duration: string;
}

interface VideoStoryboardProps {
  title: string;
  style: string;
  scenes: Scene[];
  prompt: string;
}

export default function VideoStoryboard({ title, style, scenes, prompt }: VideoStoryboardProps) {
  return (
    <div className={styles.board}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.styleBadge}>{style}</span>
      </header>
      
      <div className={styles.scenes}>
        {scenes?.map((scene) => (
          <div key={scene.id} className={styles.sceneCard}>
            <div className={styles.sceneNum}>SCENE {scene.id}</div>
            <p className={styles.desc}>{scene.description}</p>
            <div className={styles.meta}>
              <span>🎬 {scene.angle}</span>
              <span>⏱ {scene.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.promptBox}>
        <strong>GENERATION PROMPT:</strong>
        <p>{prompt}</p>
      </div>
    </div>
  );
}