import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, search = '' } = req.query

  // In a real application, you would fetch this data from Mockaroo or your actual API
  const allCustomers = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    signupDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    lastActivity: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  }))

  const filteredCustomers = allCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  )

  const paginatedCustomers = filteredCustomers.slice((Number(page) - 1) * 10, Number(page) * 10)

  res.status(200).json({ customers: paginatedCustomers })
}