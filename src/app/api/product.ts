import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category, perPage, page } = req.query;
  const url = `https://variety.co.ke/wp-json/wc/v3/products?category=${category}&per_page=${perPage}&page=${page}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Basic ' +
      Buffer.from(
        'ck_bacd2a3d505aad4203727d279eeacb384e199aba:cs_e520d5173291fdf6ef29b423cbb762d6ef081c48'
      ).toString('base64'),
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}