import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/overview', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Visitors</h2>
          <p className="text-3xl font-bold text-indigo-600">{data.totalVisitors}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Bounce Rate</h2>
          <p className="text-3xl font-bold text-indigo-600">{data.bounceRate}%</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Avg. Session Duration</h2>
          <p className="text-3xl font-bold text-indigo-600">{data.avgSessionDuration} min</p>
        </div>
      </div>
    </Layout>
  )
}