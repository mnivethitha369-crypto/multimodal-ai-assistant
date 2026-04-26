"use client"
import React from 'react';
import { useVoice } from '@/hooks/useVoice';
import styles from './VoiceRecorder.module.css';

export default function VoiceRecorder({ onTranscript }: { onTranscript: (text: string) => void }) {
  const { isRecording, startRecording, stopRecording, transcript } = useVoice();

  // Automatically pass the transcript back to the input bar when ready
  React.useEffect(() => {
    if (transcript) onTranscript(transcript);
  }, [transcript, onTranscript]);

  return (
    <div className={styles.container}>
      <button 
        className={`${styles.micBtn} ${isRecording ? styles.recording : ''}`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? '⏹' : '🎙'}
      </button>
      <span className={styles.label}>
        {isRecording ? 'Listening...' : 'Voice Command'}
      </span>
    </div>
  );
}