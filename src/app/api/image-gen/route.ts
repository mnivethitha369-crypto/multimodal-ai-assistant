import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
    });

    return NextResponse.json({ 
      url: response.data[0].url,
      revised_prompt: response.data[0].revised_prompt 
    });
  } catch (error) {
    return new NextResponse("Image Generation Failed", { status: 500 });
  }
}