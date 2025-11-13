'use client'
import React, { useState } from 'react'
export default function ChatbotWidget(){
  const [open,setOpen] = useState(false)
  const [messages,setMessages] = useState([])
  const [input,setInput] = useState('')
  const [loading,setLoading] = useState(false)
  async function send(){
    if(!input.trim()) return
    const userMsg = { role:'user', text: input }
    setMessages(m=>[...m,userMsg])
    setInput('')
    setLoading(true)
    try{
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ q: input }) })
      const json = await res.json()
      setMessages(m=>[...m, { role:'bot', text: json.answer }])
    }catch(e){
      setMessages(m=>[...m, { role:'bot', text: 'Kuch gadbad hua. Dobara try karein.' }])
    }finally{ setLoading(false) }
  }
  return (
    <div className="fixed bottom-6 right-6 w-80 z-50">
      <div className="bg-white rounded-lg shadow p-2">
        <div className="flex justify-between items-center">
          <div className="font-medium">Rozgar Assistant</div>
          <div>
            <button onClick={()=>setOpen(o=>!o)} className="px-2 py-1 text-sm">{open?'Close':'Open'}</button>
          </div>
        </div>
        {open && (
          <div className="mt-2">
            <div className="max-h-56 overflow-y-auto p-2 bg-gray-50 rounded">
              {messages.map((m,i)=>(<div key={i} className={`mb-2 ${m.role==='user'?'text-right':''}`}><div className={`inline-block p-2 rounded ${m.role==='user'?'bg-blue-100':'bg-gray-100'}`}>{m.text}</div></div>))}
            </div>
            <div className="mt-2 flex gap-2">
              <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Kaise madad karu? (e.g., bank jobs in UP)" className="flex-1 border rounded px-2 py-1" />
              <button onClick={send} className="px-3 py-1 bg-accent text-white rounded">{loading? '...' : 'Send'}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
