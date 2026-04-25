export function buildVideoPrompt(userInput: string): string {
  return `
Create a cinematic storyboard for an AI video generator.
Include: Title, scene-by-scene breakdown, camera movements, lighting/mood, audio suggestions, style.
End with a merged "Video Generation Prompt".

User concept: "${userInput}"
  `.trim();
}