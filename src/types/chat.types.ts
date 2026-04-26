export type Role = 'user' | 'assistant' | 'system';
export type AppMode = 'chat' | 'jarvis' | 'image' | 'video' | 'agent' | 'messaging';

export interface Message {
  id: string;
  role: Role;
  content: string;
  mode?: AppMode;
  timestamp: number;
  thinking?: string;
  imageUrl?: string;
  videoPrompt?: string;
}