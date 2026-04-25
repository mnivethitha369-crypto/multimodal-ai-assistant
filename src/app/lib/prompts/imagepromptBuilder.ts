export function buildImagePrompt(userInput: string): string {
  return `
Convert the following idea into a detailed AI image generation prompt.
Include: subject, style, lighting, camera angle, background, mood, detail level.
Respond ONLY with: "Image Prompt: [prompt]"

User idea: "${userInput}"
  `.trim();
}