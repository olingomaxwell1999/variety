"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/Components/ProductCard/ProductCard";
import Searchbar from "../shared/Components/Searchbar/Searchbar";
import Sidebar from "../shared/Components/Sidebar/Sidebar";
import WooCommerce from "../shared/utils/woocommerce";
import { Product } from "../shared/types/types";

interface FilterOption {
  value: string;
  label: string;
}

const categorySlug = "taps-mixers";

const filterOptions: FilterOption[] = [
  { value: "Tiles", label: "Tiles" },
  { value: "Wall Tiles", label: "Wall Tiles" },
  { value: "Floor Tiles", label: "Floor Tiles" },
  { value: "Wood Finish", label: "Wood Finish" },
  { value: "Sinks", label: "Sinks" },
  { value: "Taps", label: "Taps" },
  { value: "Mixers", label: "Mixers" },
  { value: "Marble", label: "Marble" },
  { value: "Granite", label: "Granite" },
  { value: "Showers", label: "Showers" },
  { value: "Jacuzzi", label: "Jacuzzi" },
  { value: "Bathroom", label: "Bathroom" },
  { value: "Sanitary", label: "Sanitary" },
  { value: "BathCo", label: "BathCo" },
  { value: "Sanitary", label: "Sanitary" },
  { value: "Mirrors", label: "Mirrors" },
];

const Page: React.FC = () => {
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const handleSearch: (term: string, filter?: string) => void = (
    term,
    filter
  ) => {
    const currentFilter = filter ?? "";

    const filteredItemsByTerm = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    const filteredItemsByCategory = filteredItemsByTerm.filter(
      (item) =>
        item.name.toLowerCase().includes(currentFilter.toLowerCase()) ||
        item.permalink.toLowerCase().includes(currentFilter.toLowerCase()) ||
        item.category.toLowerCase().includes(currentFilter.toLowerCase())
    );

    setFilteredItems(filteredItemsByCategory);
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 40;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products for page:", currentPage);

        const response = await fetch(
          `https://variety.co.ke/wp-json/wc/v3/products?category=133&per_page=${productsPerPage}&page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              // Add your WooCommerce API credentials here
              Authorization:
                "Basic " +
                Buffer.from(
                  "ck_bacd2a3d505aad4203727d279eeacb384e199aba:cs_e520d5173291fdf6ef29b423cbb762d6ef081c48"
                ).toString("base64"),
            },
          }
        );

        console.log("Response:", response); // Log the response for debugging

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="tilepage">
      <div className="sidebar">
        <Sidebar
          categories={Array.from(
            new Set(products.map((product) => product.category))
          )}
          setFilteredItems={setFilteredItems}
        />
      </div>

      <div className="productarea">
        <div className="toppart mb-6">
          <Searchbar onSearch={handleSearch} filterOptions={filterOptions} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

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
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200">
          Page {currentPage} of {totalPages}
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
