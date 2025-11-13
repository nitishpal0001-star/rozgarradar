import { NextResponse } from 'next/server'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'

export async function GET(){
  const q = query(collection(db,'jobs'), orderBy('postedAt','desc'))
  const snapshot = await getDocs(q)
  const jobs = snapshot.docs.map(d=>({ id:d.id, ...d.data() }))
  return NextResponse.json(jobs)
}
