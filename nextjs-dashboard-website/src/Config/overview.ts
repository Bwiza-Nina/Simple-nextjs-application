import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // In a real application, you would fetch this data from Mockaroo or your actual API
  const data = {
    totalVisitors: 15000,
    bounceRate: 35,
    avgSessionDuration: 4.5,
  }

  res.status(200).json(data)
}