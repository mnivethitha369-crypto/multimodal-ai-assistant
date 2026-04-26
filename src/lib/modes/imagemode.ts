import { buildImagePrompt } from '../prompts/imagePromptBuilder';

export function getImageModePayload(input: string) {
  return {
    systemPrompt: "You are a creative visual director.",
    userMessage: buildImagePrompt(input)
  };
}