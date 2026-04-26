export interface VideoScene {
  description: string;
  camera: string;
  mood: string;
}

export interface VideoResult {
  title: string;
  style: string;
  scenes: VideoScene[];
  mergedPrompt: string;
}