import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Helper to handle the streaming response logic as per the master prompt
 */
export async function streamChat(systemPrompt: string, history: any[], userMessage: string) {
  return await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: userMessage },
    ],
    stream: true,
  });
}