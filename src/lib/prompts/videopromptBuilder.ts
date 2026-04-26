export function buildVideoPrompt(userInput: string): string {
  return `Act as a professional storyboard artist for a 2D animation channel. 
  Create a cinematic storyboard based on: "${userInput}".
  
  Format the output as follows:
  TITLE: [Scene Title]
  STYLE: [e.g., 2D Cartoon, Flat Animation]
  SCENES:
  1. [Action, Camera Movement, Lighting, Audio Cues]
  2. [Action, Camera Movement, Lighting, Audio Cues]
  
  FINAL PROMPT: [A single merged prompt for a video generation model]`;
}