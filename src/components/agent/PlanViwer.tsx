"use client"
import React from 'react';
import ThinkingSteps, { AgentStep } from './Thinkingsteps';
import styles from './PlanViewer.module.css';

interface Plan {
  intent: string;
  steps: AgentStep[];
  finalAnswer?: string;
}

export default function PlanViewer({ plan }: { plan: Plan }) {
  return (
    <div className={styles.container}>
      <div className={styles.intentBox}>
        <span className={styles.label}>OBJECTIVE</span>
        <p>{plan.intent}</p>
      </div>
      
      <ThinkingSteps steps={plan.steps} />
      
      {plan.finalAnswer && (
        <div className={styles.resultBox}>
          <span className={styles.label}>FINAL OUTPUT</span>
          <div className={styles.content}>{plan.finalAnswer}</div>
        </div>
      )}
    </div>
  );
}