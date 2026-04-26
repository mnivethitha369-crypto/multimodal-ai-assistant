"use client"
import React from 'react';
import styles from './ThinkingSteps.module.css';

export interface AgentStep {
  label: string;
  status: 'done' | 'running' | 'pending';
}

export default function ThinkingSteps({ steps }: { steps: AgentStep[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>⚙️ Agent Reasoning</div>
      {steps.map((step, i) => (
        <div key={i} className={`${styles.step} ${styles[step.status]}`}>
          <span className={styles.icon}>
            {step.status === 'done' ? '✓' : step.status === 'running' ? '●' : '○'}
          </span>
          {step.label}
        </div>
      ))}
    </div>
  );
}