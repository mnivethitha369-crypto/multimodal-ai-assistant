export function buildImagePrompt(userInput: string): string {
  return `Convert this idea into a detailed image prompt: "${userInput}". 
  Focus on: subject, 2D animation style, flat colors, clean line art, lighting, and a vibrant mood suitable for YouTube storytelling. 
  Output format: "Image Prompt: [optimized prompt]"`;
}