export type Tone = 'casual' | 'formal' | 'technical' | 'cinematic';

export interface UserPreferences {
  tone: Tone;
  name?: string;
  language?: string;
}

export const defaultPreferences: UserPreferences = {
  tone: 'casual'
};