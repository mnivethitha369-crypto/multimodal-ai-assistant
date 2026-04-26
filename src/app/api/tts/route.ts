import { NextRequest, NextResponse } from 'next/server';
import { textToSpeech } from '@/lib/ai/elevenLabs';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const audioBuffer = await textToSpeech(text);

    return new NextResponse(audioBuffer, {
      headers: { 'Content-Type': 'audio/mpeg' },
    });
  } catch (error) {
    return new NextResponse("TTS Error", { status: 500 });
  }
}
