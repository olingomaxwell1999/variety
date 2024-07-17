import React, { useState, useEffect } from "react";
import { Product } from "../../types/types";

interface SearchBarProps {
  onSearch: (products: Product[]) => void;
}

const Searchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    if (!categoryId) return;

    try {
      const response = await fetch(
        `https://admin.variety.co.ke/wp-json/wc/v3/products?category=${categoryId}`,
        {
          headers: {
            "Content-Type": "application/json",
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
        setFilteredProducts(formattedProducts);
        onSearch(formattedProducts);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTermLower) ||
        product.category.toLowerCase().includes(searchTermLower)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchProducts();
    handleSearch();
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter category ID"
          onChange={handleCategoryChange}
          value={categoryId}
          className="w-2/3 text-black px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-1/3 bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
