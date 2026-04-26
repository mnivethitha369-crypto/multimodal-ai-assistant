import { buildImagePrompt } from '../prompts/imagepromptBuilder';

export function getImageModePayload(input: string) {
  return {
    systemPrompt: "You are a creative visual director.",
    userMessage: buildImagePrompt(input)
  };
}