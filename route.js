import { NextResponse } from 'next/server'
export async function POST(req){
  const body = await req.json()
  const q = body.q || ''
  if(!q) return NextResponse.json({ answer: 'Kya poochna chahte hain?' })
  const OPENAI_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY
  const payload = {
    model: 'gpt-4o-mini',
    messages: [{ role:'system', content: 'You are RozgarRadar assistant that helps find jobs and explain application steps in Hindi.' }, { role:'user', content: q }]
  }
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_KEY}` },
    body: JSON.stringify(payload)
  })
  const json = await r.json()
  const answer = json.choices?.[0]?.message?.content || 'Maaf kijiye, kuch galat hua.'
  return NextResponse.json({ answer })
}
