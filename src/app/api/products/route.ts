import { NextResponse } from 'next/server';
import { mockProducts } from '../../data/products';

const productsPerPage = 40;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') || '1', 10) : 1;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const totalProducts = mockProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const products = mockProducts.slice(startIndex, endIndex);

  return NextResponse.json({
    products,
    totalPages,
  });
}