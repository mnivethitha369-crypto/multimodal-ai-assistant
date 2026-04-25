import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const message = body?.message?.text;
  const chatId = body?.message?.chat?.id;
  if (!message || !chatId) return NextResponse.json({ ok: true });

  // Forward to chat API
  const res = await fetch(`${process.env.BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history: [] }),
  });

  const reply = await res.text();

  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: reply }),
  });

  return NextResponse.json({ ok: true });
}