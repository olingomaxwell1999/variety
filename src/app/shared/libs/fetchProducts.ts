// lib/fetchProducts.ts
import { Product } from '../types/types';

const API_URL = 'https://admin.variety.co.ke/wp-json/wc/v3';
const CONSUMER_KEY = 'ck_1d07cbbdd0a67de26ff621b4342ce11d7b666db1';
const CONSUMER_SECRET = 'cs_65db64657289eeb22624943a72240815b78cda24';

const basicAuth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`, {
    headers: {
      Authorization: `Basic ${basicAuth}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.status}`);
  }

  const products = await response.json();
  return products;
}