import { AppMode } from './chat.types';

export const MODE_META: Record<AppMode, { label: string; icon: string; color: string; desc: string }> = {
  chat: { label: 'Chat', icon: '💬', color: '#00d4ff', desc: 'General conversation' },
  jarvis: { label: 'JARVIS', icon: '🤖', color: '#7b5ea7', desc: 'Calm, precise assistant' },
  image: { label: 'Image Gen', icon: '🎨', color: '#ff6b9d', desc: 'Generate image prompts' },
  video: { label: 'Video Gen', icon: '🎬', color: '#ffaa00', desc: 'Cinematic storyboards' },
  agent: { label: 'Agent', icon: '⚙️', color: '#00ff9d', desc: 'Step-by-step reasoning' },
  messaging: { label: 'Messaging', icon: '📱', color: '#ff9500', desc: 'WhatsApp/Telegram style' },
};