import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { detectMode } from '@/lib/modeDetector';
import { SYSTEM_PROMPT } from '@/lib/prompts/systemPrompt';
import { JARVIS_PROMPT } from '@/lib/prompts/jarvisPrompt';
import { buildImagePrompt } from '@/lib/prompts/imagePromptBuilder';
import { buildVideoPrompt } from '@/lib/prompts/videoPromptBuilder';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();
  const mode = detectMode(message);

  let systemPrompt = SYSTEM_PROMPT;
  let userMessage = message;

  if (mode === 'jarvis')  systemPrompt = JARVIS_PROMPT;
  if (mode === 'image')   userMessage  = buildImagePrompt(message);
  if (mode === 'video')   userMessage  = buildVideoPrompt(message);

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: userMessage },
    ],
    stream: true,
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.choices[0]?.delta?.content ?? '';
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}