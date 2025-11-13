'use client'
import useSWR from 'swr'
import axios from 'axios'
import JobCard from './JobCard'
const fetcher = url => axios.get(url).then(r=>r.data)
export default function JobList(){
  const { data, error } = useSWR('/api/jobs', fetcher)
  if (error) return <div>Failed to load jobs</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-4">
      {data.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  )
}
