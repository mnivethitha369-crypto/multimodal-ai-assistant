export type AppMode = 'chat' | 'jarvis' | 'image' | 'video' | 'agent' | 'messaging';

export function detectMode(input: string): AppMode {
  const text = input.toLowerCase();
  if (text.includes('jarvis mode')) return 'jarvis';
  if (text.match(/generate image|create image|draw|image of/)) return 'image';
  if (text.match(/generate video|create video|storyboard|cinematic/)) return 'video';
  if (text.match(/plan|automate|agent|step[- ]by[- ]step task/)) return 'agent';
  return 'chat';
}