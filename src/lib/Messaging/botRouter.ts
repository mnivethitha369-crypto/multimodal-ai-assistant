import { detectMode } from '../modeDetector';
import { getSystemPrompt, PromptMode } from '../prompts/systemPrompt';

export function routeMessage(text: string) {
  // 1. Detect the mode based on the user's input (e.g., "draw..." -> "image")
  const mode = detectMode(text);
  
  // 2. Fetch the correct system instructions using the detected mode, not the text itself
  // We cast to PromptMode to ensure compatibility with SYSTEM_PROMPTS keys
  const systemPrompt = getSystemPrompt(mode as PromptMode); 
  
  return { systemPrompt, userMessage: text, mode };
}