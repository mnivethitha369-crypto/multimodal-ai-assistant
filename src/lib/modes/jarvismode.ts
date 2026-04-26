import { SYSTEM_PROMPTS } from '../prompts/systemPrompt';

export const jarvisModeConfig = {
  label: 'JARVIS',
  icon: '🤖',
  color: '#7b5ea7',
  systemPrompt: SYSTEM_PROMPTS.jarvis,
  features: ['voice', 'streaming', 'precise-logic']
};