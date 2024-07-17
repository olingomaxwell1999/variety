import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query
  const cs = "cs_65db64657289eeb22624943a72240815b78cda24"
  const ck = "ck_1d07cbbdd0a67de26ff621b4342ce11d7b666db1"

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const response = await axios.get(`https://admin.variety.co.ke/wp-json/wc/v3/products`, {
      params: {
        category: category,
        consumer_key: ck,
        consumer_secret: cs,
      },
    })
    res.status(200).json(response.data)
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Error fetching products' })
  }
}