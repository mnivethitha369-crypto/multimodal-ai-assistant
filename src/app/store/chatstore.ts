import { create } from 'zustand';
import { Message } from '@/types/chat.types';

interface ChatState {
  messages: Message[];
  isStreaming: boolean;
  addMessage: (msg: Message) => void;
  appendToLast: (chunk: string) => void;
  setStreaming: (bool: boolean) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isStreaming: false,
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  appendToLast: (chunk) => set((state) => {
    const lastMsg = state.messages[state.messages.length - 1];
    if (!lastMsg) return state;
    const updatedMessages = [...state.messages];
    updatedMessages[updatedMessages.length - 1] = {
      ...lastMsg,
      content: lastMsg.content + chunk,
    };
    return { messages: updatedMessages };
  }),
  setStreaming: (bool) => set({ isStreaming: bool }),
  clearMessages: () => set({ messages: [] }),
}));