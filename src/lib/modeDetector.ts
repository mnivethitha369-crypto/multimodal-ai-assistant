import { AppMode } from '@/types/chat.types';

export function detectMode(input: string): AppMode {
  const text = input.toLowerCase();

  // 1. JARVIS Priority
  if (/\bjarvis\b|\bjarvis mode\b/.test(text)) return 'jarvis';

  // 2. Image Generation
  if (/generate image|create image|draw me|image of|picture of|make.*image/.test(text)) {
    return 'image';
  }

  // 3. Video / Storyboard
  if (/generate video|create video|storyboard|cinematic|film scene|video of/.test(text)) {
    return 'video';
  }

  // 4. Agent / Planning
  if (/step.?by.?step|plan for|automate|agent mode|break.*down.*task/.test(text)) {
    return 'agent';
  }

  // 5. Messaging
  if (/whatsapp|telegram|messaging|bot mode/.test(text)) {
    return 'messaging';
  }

  // Default
  return 'chat';
}