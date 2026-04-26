import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const chatId = body.message?.chat?.id;
  const text = body.message?.text;

  // Simple echo for now - in production, you'd call openai here
  if (chatId && text) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: `NEXUS AI received: ${text}` }),
    });
  }

  return NextResponse.json({ ok: true });
}