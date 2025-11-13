'use client'
import React from 'react'
import Lottie from 'lottie-react'
import radar from '../public/lottie/radar.json'

export default function Hero(){
  return (
    <section className="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">RozgarRadar</h1>
        <p className="mt-2 text-gray-600">Jobs near you — सरकारी और निजी नौकरियाँ, फिल्टर करके तुरन्त देखें</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-accent text-white rounded">Naukri ढूंढो</button>
          <button className="px-4 py-2 border rounded">नियोक्ता के लिए</button>
        </div>
      </div>
      <div className="w-56 h-56">
        <Lottie animationData={radar} loop={true} />
      </div>
    </section>
  )
}
