"use client"
import { useState } from 'react';

export function useVoice() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = async (text: string) => {
    setIsSpeaking(true);
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        body: JSON.stringify({ text }),
      });
      
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = () => setIsSpeaking(false);
      source.start();
    } catch (error) {
      console.error("Voice Error:", error);
      setIsSpeaking(false);
    }
  };

  return { speak, isSpeaking };
}
// Add these to your existing src/hooks/useVoice.ts
"use client"
import { useState, useRef } from 'react';

export function useVoice() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorder.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.webm');

      const response = await fetch('/api/stt', { method: 'POST', body: formData });
      const data = await response.json();
      setTranscript(data.text);
    };

    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  // ... (keep your existing 'speak' function here)

  return { startRecording, stopRecording, isRecording, transcript, setTranscript };
}