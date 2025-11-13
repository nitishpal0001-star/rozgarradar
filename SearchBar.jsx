'use client'
import React, { useState } from 'react'
export default function SearchBar(){
  const [q,setQ] = useState('')
  async function doSearch(e){
    e.preventDefault()
    alert('Search for: '+q)
  }
  return (
    <form onSubmit={doSearch} className="flex gap-2">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="जॉब का नाम, कंपनी या लोकेशन" className="flex-1 border rounded px-3 py-2" />
      <button className="px-4 py-2 bg-brand text-white rounded">खोजें</button>
    </form>
  )
}
