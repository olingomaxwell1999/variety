"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface Product {
  id: number;
  name: string;
  // Add other properties as needed
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://admin.variety.co.ke/wp-json/wc/v3/products?search=${searchTerm}&search_by=name`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded text-black"
        />
        <button
          type="submit"
          className="px-2 py-1 bg-blue-500 text-white rounded ml-2"
        >
          Search
        </button>
      </form>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-nav flex flex-col md:flex-row">
      <div className="icon-area sm:mr-10 flex items-center justify-between md:justify-start">
        <ul className="hidden md:flex">
          <li>
            <Link
              href="https://twitter.com/varietyflooring?lang=en"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/varietyflooringlimited/"
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/varietyflooringworksltd/"
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
          </li>
          {/* <li>
            <Link
              href="https://ke.linkedin.com/company/variety-flooring-works-limited"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li> */}
        </ul>
        <div className="md:hidden ml-7">
          <GiHamburgerMenu onClick={toggleMenu} />
        </div>
      </div>
      <div className={`text-area ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row">
          <li>
            <SearchBar />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/enquiry">Enquire</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
