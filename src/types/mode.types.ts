export type AppMode = 'chat' | 'image' | 'video' | 'voice' | 'story';

export interface ModeConfig {
  label: string;
  icon: string;
  color: string;
  description: string;
}

export const MODE_META: Record<AppMode, ModeConfig> = {
  chat: { label: 'Chat', icon: '💬', color: '#3b82f6', description: 'Interactive AI Chat' },
  image: { label: 'Image', icon: '🎨', color: '#10b981', description: 'Generate 2D Assets' },
  video: { label: 'Video', icon: '🎬', color: '#8b5cf6', description: 'Create Animation' },
  voice: { label: 'Voice', icon: '🎙️', color: '#f59e0b', description: 'Voice Commands' },
  story: { label: 'Story', icon: '📖', color: '#ec4899', description: 'Script Writing' }
};
