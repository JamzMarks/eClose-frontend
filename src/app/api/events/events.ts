// pages/api/events.ts
import { NextApiRequest, NextApiResponse } from 'next'

const mockEvents = Array.from({ length: 100 }, (_, i) => ({
  id: `event-${i}`,
  title: `Evento ${i + 1}`,
  date: `2025-07-${(i % 30) + 1}`,
  location: 'São Paulo, SP',
  image: 'https://source.unsplash.com/random/400x200?event,' + i,
}))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query
  const start = (Number(page) - 1) * Number(limit)
  const end = start + Number(limit)

  res.status(200).json(mockEvents.slice(start, end))
}
