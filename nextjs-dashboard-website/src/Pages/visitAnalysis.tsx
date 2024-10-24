import { useState } from 'react'
import Layout from '../components/layout'
import useSWR from 'swr'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Visits() {
  const { data, error } = useSWR('/api/visits', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Visit Analysis</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Website Visits (Last 30 Days)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pageViews" stroke="#8884d8" name="Page Views" />
            <Line type="monotone" dataKey="uniqueVisitors" stroke="#82ca9d" name="Unique Visitors" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  )
}