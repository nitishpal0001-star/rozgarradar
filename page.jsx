'use client'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import JobList from '../components/JobList'
import ChatbotWidget from '../components/ChatbotWidget'

export default function Page(){
  return (
    <main className="max-w-6xl mx-auto p-4">
      <Hero />
      <div className="mt-6">
        <SearchBar />
      </div>
      <div className="mt-6">
        <JobList />
      </div>
      <ChatbotWidget />
    </main>
  )
}
