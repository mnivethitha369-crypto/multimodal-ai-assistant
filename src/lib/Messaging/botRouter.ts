import { detectMode } from '../modeDetector';
import { getSystemPrompt } from '../prompts/imagePromptBuilder'; // Or relevant prompt lib

export function routeMessage(text: string) {
  const mode = detectMode(text);
  const systemPrompt = getSystemPrompt(text); // Logic to fetch based on detected mode
  
  return { systemPrompt, userMessage: text, mode };
}