import { create } from 'zustand';
import { AppMode } from '@/types/chat.types';

interface ModeState {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

export const useModeStore = create<ModeState>((set) => ({
  mode: 'chat',
  setMode: (mode) => set({ mode }),
}));