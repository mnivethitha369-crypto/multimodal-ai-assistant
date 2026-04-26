import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';
import { getSystemPrompt, PromptMode } from '@/lib/prompts/systemPrompt';

export async function POST(req: NextRequest) {
  try {
    const { message, history = [], mode = 'chat' } = await req.json();

    // 1. Safety Filter (Simplified version)
    const unsafeWords = /\b(bomb|weapon|hack|malware|kill|nsfw)\b/i;
    if (unsafeWords.test(message)) {
      return new NextResponse("I cannot fulfill this request due to safety restrictions.", { status: 400 });
    }

    // 2. Select System Prompt
    const systemPrompt = getSystemPrompt(mode as PromptMode);

    // 3. Request OpenAI Stream
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: message },
      ],
      stream: true,
    });

    // 4. Handle Streaming back to Frontend
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content ?? '';
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Mode': mode 
      },
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
// Add these imports to src/app/api/chat/route.ts
import { isSafe, safetyMessage } from '@/lib/prompts/safetyFilter';
import { detectMode } from '@/lib/modeDetector';

// Inside the POST function, replace the old logic with:
const { message, history = [], mode: manualMode } = await req.json();

// 1. Run Safety Check
if (!isSafe(message)) {
  return new NextResponse(safetyMessage(), { status: 400 });
}

// 2. Auto-Detect Mode (if not manually forced by the user)
const activeMode = manualMode || detectMode(message);

// 3. (Rest of your OpenAI streaming logic continues here...)