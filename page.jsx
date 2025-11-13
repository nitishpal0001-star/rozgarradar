'use client'
import React, { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { db } from '../../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function Admin(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState(null)
  const auth = getAuth()

  useEffect(()=>{
    const unsub = auth.onAuthStateChanged(u=> setUser(u))
    return ()=>unsub()
  },[])

  async function login(e){
    e.preventDefault()
    await signInWithEmailAndPassword(auth,email,password)
  }
  async function logout(){ await signOut(auth) }

  async function addJob(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const doc = Object.fromEntries(form)
    await addDoc(collection(db,'jobs'),{ ...doc, postedAt: new Date().toISOString().slice(0,10) })
    alert('Job added')
    e.target.reset()
  }

  if(!user) return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded">
      <h2 className="font-semibold">Admin Login</h2>
      <form onSubmit={login} className="mt-4">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded px-2 py-2" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded px-2 py-2 mt-2" />
        <button className="mt-3 px-4 py-2 bg-brand text-white rounded">Login</button>
      </form>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 bg-white rounded">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Admin Panel</h2>
        <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
      </div>

      <form onSubmit={addJob} className="mt-4 grid gap-2">
        <input name="title" placeholder="Job title" className="border rounded px-2 py-2" />
        <input name="company" placeholder="Company" className="border rounded px-2 py-2" />
        <input name="category" placeholder="Sarkari/Private" className="border rounded px-2 py-2" />
        <input name="location" placeholder="Location" className="border rounded px-2 py-2" />
        <input name="salary" placeholder="Salary" className="border rounded px-2 py-2" />
        <textarea name="description" placeholder="Description" className="border rounded px-2 py-2" />
        <input name="applyLink" placeholder="Apply link" className="border rounded px-2 py-2" />
        <button className="px-4 py-2 bg-accent text-white rounded">Add Job</button>
      </form>
    </div>
  )
}
