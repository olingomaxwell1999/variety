"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../shared/types/types";

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://admin.variety.co.ke/wp-json/wc/v3/products?category=88&per_page=${productsPerPage}&page=${currentPage}`,
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
            category: product.categories
              .map((category: any) => category.name)
              .join(", "),
          }));

          setProducts(formattedProducts);
          console.log("Formatted products:", formattedProducts);

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
    <div className="tilepage flex flex-col">
      {/* Product list */}
      <ul>
        {products.map((product) => (
          <li key={product.id} className="py-2">
            {product.name}
          </li>
        ))}
      </ul>

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
