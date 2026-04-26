"use client"
import { useState } from 'react';

export function useMediaGen() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (type: 'image' | 'video', prompt: string) => {
    setIsGenerating(true);
    setError(null);
    try {
      const endpoint = type === 'image' ? '/api/image-gen' : '/api/chat'; // Using chat for video storyboard
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, mode: type }),
      });
      return await response.json();
    } catch (err) {
      setError("Failed to generate media.");
    } finally {
      setIsGenerating(false);
    }
  };

  return { generate, isGenerating, error };
}