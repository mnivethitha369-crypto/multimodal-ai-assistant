import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';
import { getSystemPrompt, PromptMode } from '@/lib/prompts/systemPrompt';
import { isSafe, safetyMessage } from '@/lib/prompts/safetyFilter';
import { detectMode } from '@/lib/modeDetector';

export async function POST(req: NextRequest) {
  try {
    const { message, history = [], mode: manualMode } = await req.json();

    // 1. Run Safety Check
    if (!isSafe(message)) {
      return NextResponse.json({ content: safetyMessage() }, { status: 400 });
    }

    // 2. Auto-Detect Mode
    const activeMode = manualMode || detectMode(message);
    const systemPrompt = getSystemPrompt(activeMode as PromptMode);

    // 3. Request OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: message },
      ],
      stream: false, // Matches your useChat hook's JSON expectation
    });

    const aiContent = response.choices[0]?.message?.content || "I'm not sure how to respond.";

    // 4. Return as JSON
    return NextResponse.json({ 
      content: aiContent,
      mode: activeMode 
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ content: "NEXUS Core connection error." }, { status: 500 });
  }
}