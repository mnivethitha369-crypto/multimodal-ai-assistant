import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new NextResponse("No audio file provided", { status: 400 });
    }

    const transcription = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1",
    });

    return NextResponse.json({ text: transcription.text });
  } catch (error) {
    console.error("STT Error:", error);
    return new NextResponse("Transcription failed", { status: 500 });
  }
}