import { create } from 'zustand';

interface MemoryState {
  preferences: Record<string, string>;
  setPreference: (key: string, value: string) => void;
  getPreference: (key: string) => string | undefined;
  clearMemory: () => void;
}

export const useMemoryStore = create<MemoryState>((set, get) => ({
  preferences: {},
  setPreference: (key, value) => set((state) => ({
    preferences: { ...state.preferences, [key]: value }
  })),
  getPreference: (key) => get().preferences[key],
  clearMemory: () => set({ preferences: {} }),
}));
