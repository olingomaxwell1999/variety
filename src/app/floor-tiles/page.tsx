"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/Components/ProductCard/ProductCard";
import Sidebar from "../shared/Components/Sidebar/Sidebar";
import { Product } from "../shared/types/types";
import Searchbar from "../shared/Components/Searchbar/Searchbar";

const Page: React.FC = () => {
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearch: (term: string, filter?: string) => void = (
    term,
    filter
  ) => {
    setSearchTerm(term);
    setSelectedFilter(filter || "");
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://admin.variety.co.ke/wp-json/wc/v3/products?category=43&per_page=${productsPerPage}&page=${currentPage}`,
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
    <div className="tilepage flex">

      {/* Toggle button */}
      <button
        className="fixed toggle-btn top-10 left-4 z-50 p-2 bg-gray-200 rounded-md shadow-md focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed left-0 h-screen pt-20 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          categories={Array.from(
            new Set(products.map((product) => product.category))
          )}
          setFilteredItems={setFilteredItems}
          handleSearch={handleSearch}
          handleSidebarToggle={handleSidebarToggle}
        />
      </div>

      {/* Main content area */}
      <div
        className={`productarea flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : ""
        }`}
      >
        {/* Search bar */}
        <div className="searchbar mt-5 mb-5">
          <Searchbar onSearch={handleSearch} filterOptions={filterOptions} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
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