"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  // Add other properties as needed
}

const SearchResultsClient = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);

  const searchTerm = searchParams.get("term") || "";
  const selectedFilter = searchParams.get("filter") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://admin.variety.co.ke/wp-json/wc/v3/products?search=${searchTerm}&search_by=name&filter=${selectedFilter}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (searchTerm && selectedFilter) {
      fetchProducts();
    }
  }, [searchTerm, selectedFilter]);

  return (
    <div>
      <h1>Search Results</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResultsClient;
