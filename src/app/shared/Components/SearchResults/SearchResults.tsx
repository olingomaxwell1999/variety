// src/app/search/SearchResults.tsx
"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

interface SearchResultsProps {
  code: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ code }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (code) {
      fetchProducts();
    }
  }, [code]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://admin.variety.co.ke/wp-json/wc/v3/products?category=${code}&consumer_key=ck_1d07cbbdd0a67de26ff621b4342ce11d7b666db1&consumer_secret=cs_65db64657289eeb22624943a72240815b78cda24`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
