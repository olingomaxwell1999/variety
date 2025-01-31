"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/Components/ProductCard/ProductCard";
import { Product } from "../shared/types/types";

const Page: React.FC = () => {
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearch: (term: string, filter?: string) => void = (
    term,
    filter
  ) => {
    setSearchTerm(term);
    setSelectedFilter(filter || "");
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://admin.variety.co.ke/wp-json/wc/v3/products?category=22&per_page=${productsPerPage}&page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              // Add your WooCommerce API credentials here
              Authorization:
                "Basic " +
                Buffer.from(
                  "ck_1d07cbbdd0a67de26ff621b4342ce11d7b666db1:cs_65db64657289eeb22624943a72240815b78cda24"
                ).toString("base64"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const formattedProducts: Product[] = data.map((product: any) => ({
            id: product.id,
            name: product.name,
            permalink: product.permalink,
            slug: product.slug,
            valuebefore: product.price,
            valueafter: product.sale_price || product.price,
            image: product.images.map((img: any) => ({
              id: img.id,
              src: img.src,
              alt: img.alt || "",
            })),
            category: product.categories
              .map((category: any) => category.name)
              .join(", "),
          }));

          setProducts(formattedProducts);
          console.log("Formatted products:", formattedProducts);
          setFilteredItems(formattedProducts);

          const totalProducts = Number(response.headers.get("X-WP-Total"));
          const calculatedTotalPages = Math.ceil(
            totalProducts / productsPerPage
          );
          setTotalPages(calculatedTotalPages);
        } else {
          console.error(
            "Failed to fetch products. Response is not ok.",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    const filterProducts = () => {
      const filteredItemsByTerm = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const filteredItemsByCategory = filteredItemsByTerm.filter(
        (item) =>
          item.name.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          item.permalink.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          item.category.toLowerCase().includes(selectedFilter.toLowerCase())
      );

      setFilteredItems(filteredItemsByCategory);
    };

    filterProducts();
  }, [products, searchTerm, selectedFilter]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterOptions = [
    { value: "", label: "All" },
    ...Array.from(new Set(products.map((product) => product.category))).map(
      (category) => ({
        value: category,
        label: category,
      })
    ),
  ];

  return (
    <div className="tilepage flex flex-col">

      {/* Category buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSearch("", option.value)}
            className={`px-4 py-2 rounded-md ${
              option.value === selectedFilter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-l-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-200">
          {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-r-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;