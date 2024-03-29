"use client";
import React from "react";
import ProductCard from "../shared/Components/ProductCard/ProductCard";
import Searchbar from "../shared/Components/Searchbar/Searchbar";
import Sidebar from "../shared/Components/Sidebar/Sidebar";
import { useState } from "react";

interface FilterOption {
  value: string; // Ensure value is always a string
  label: string;
}

const filterOptions: FilterOption[] = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
];

interface Item {
  id: number;
  name: string;
  category: string;
}

const categories = ["Category 1", "Category 2", "Category 3"];

const items: Item[] = [
  { id: 1, name: "Item 1", category: "Tiles" },
  { id: 2, name: "Item 2", category: "Sinks" },
  { id: 3, name: "Item 3", category: "Marble" },
  { id: 4, name: "Item 4", category: "Granite" },
  { id: 5, name: "Item 5", category: "Showers" },
];

const page = () => {
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const handleSearch: (term: string, filter?: string) => void = (
    term,
    filter
  ) => {
    // Implement your search logic here using term and filter
    console.log("Search term:", term, "Filter:", filter);
  };

  const productInfo = [
    {
      title: "Product 1",
      image: "/banner.jpg",
      description: "Tiles",
      valuebefore: "Ksh 900",
      valueafter: "Ksh 600",
    },
    {
      title: "Product 1",
      image: "/banner.jpg",
      description: "Tiles",
      valuebefore: "Ksh 900",
      valueafter: "Ksh 600",
    },
    {
      title: "Product 1",
      image: "/banner.jpg",
      description: "Tiles",
      valuebefore: "Ksh 900",
      valueafter: "Ksh 600",
    },
    {
      title: "Product 1",
      image: "/banner.jpg",
      description: "Tiles",
      valuebefore: "Ksh 900",
      valueafter: "Ksh 600",
    },
  ];
  return (
    <div className="tilepage">
      <div className="sidebar">
        <Sidebar categories={categories} setFilteredItems={setFilteredItems} />
      </div>

      <div className="productarea">
        <div className="toppart mb-6">
          <Searchbar onSearch={handleSearch} filterOptions={filterOptions} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {productInfo.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              valuebefore={product.valuebefore}
              valueafter={product.valueafter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
