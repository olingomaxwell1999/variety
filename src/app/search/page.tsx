"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import SearchBar from "../shared/Components/Searchbar/Searchbar";
import { Product } from "../shared/types/types";
import ProductCard from "../shared/Components/ProductCard/ProductCard";

const SearchPage: NextPage = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = (products: Product[]) => {
    setSearchResults(products);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Product Search</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {searchResults.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
