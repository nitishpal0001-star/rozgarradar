'use client'
import React from 'react'
export default function JobCard({ job }){
  return (
    <article className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <div className="text-sm text-gray-500">{job.company} • {job.location}</div>
        </div>
        <div className={`text-xs px-2 py-1 rounded ${job.category==='Sarkari'?'bg-green-100 text-green-800':'bg-indigo-100 text-indigo-800'}`}>{job.category}</div>
      </div>
      <p className="mt-3 text-sm text-gray-700">{job.description?.slice(0,120)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm font-medium">{job.salary}</div>
        <div className="flex gap-2">
          <a href={job.applyLink|| '#'} className="px-3 py-1 border rounded">Apply</a>
          <button className="px-3 py-1 bg-gray-100 rounded" onClick={()=>navigator.clipboard.writeText(window.location.href + ' | ' + job.id)}>Share</button>
        </div>
      </div>
    </article>
  )
}
