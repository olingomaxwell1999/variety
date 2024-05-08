"use client";
import Logo from "../../../assets/varietylo.png";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} height={90} alt="Variety Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/granite"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Granite
                </Link>
              </li>

              <li>
                <Link
                  href="/marble"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Marble
                </Link>
              </li>

              <li>
                <Link
                  href="/quartz"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Quartz
                </Link>
              </li>

              <li>
                <Link
                  href="/sintered-stone"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Sintered Stone
                </Link>
              </li>
              
              <li className="relative">
                <button
                  type="button"
                  className="text-black hover:text-gray-900 font-medium flex items-center"
                  onClick={() => toggleDropdown(1)}
                >
                  Tiles
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    dropdownOpen === 1 ? "block" : "hidden"
                  } absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/floor-tiles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Floor Tiles
                    </Link>
                    <Link
                      href="/walltiles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Wall Tiles
                    </Link>
                    <Link
                      href="/wood-finish"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Wood Finish
                    </Link>
                    <Link
                      href="/mosaic"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Mosaic Tiles
                    </Link>
                    <Link
                      href="/acid-proof-tiles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Acid Proof Tiles
                    </Link>
                    <Link
                      href="/tile-essentials"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Tile Essentials
                    </Link>
                    {/* Add more dropdown links as needed */}
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/taps"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Taps & Showers
                </Link>
              </li>

              <li>
                <Link
                  href="/bathroom-accessories"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Bathroom Accessories
                </Link>
              </li>

              <li>
                <Link
                  href="/sanitary"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Sanitary
                </Link>
              </li>

              <li>
                <Link
                  href="/mirors"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Mirrors & Cabinets
                </Link>
              </li>

              <li>
                <Link
                  href="/other-products"
                  className="text-black hover:text-gray-900 font-medium"
                >
                  Other Products
                </Link>
              </li>
              {/* Add more dropdown menus and regular links as needed */}
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#1b6cb4] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#1b6cb4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/granite"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Granite
          </Link>

          <Link
            href="/marble"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Marble
          </Link>

          <Link
            href="/quartz"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Quartz
          </Link>

          <Link
            href="/sintered-stone"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Sintered Stone
          </Link>
          
          <div className="relative">
            <button
              type="button"
              className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              onClick={() => toggleDropdown(2)}
            >
              Tiles
              <svg
                className={`${
                  dropdownOpen === 2 ? "rotate-180" : ""
                } ml-2 h-5 w-5 inline-block transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${
                dropdownOpen === 2 ? "block" : "hidden"
              } py-2 space-y-1`}
            >
              <Link
                href="/floor-tiles"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Floor Tiles
              </Link>
              <Link
                href="/walltiles"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Wall Tiles
              </Link>
              <Link
                href="/wood-finish"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Wood Finish
              </Link>
              <Link
                href="/mosaic"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Mosaic
              </Link>
              <Link
                href="/acid-proof-tiles"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Acid Proof Tiles
              </Link>
              <Link
                href="/tile-essentials"
                className="text-black hover:bg-[#1b6cb4] hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                Tile Essentials
              </Link>
            </div>
          </div>

          <Link
            href="/taps"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Taps & Showers
          </Link>
          <Link
            href="/bathroom-accessories"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Bathroom Accessories
          </Link>
          <Link
            href="/sanitary"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Sanitary
          </Link>
          <Link
            href="/mirors"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Mirrors & Cabinets
          </Link>
          <Link
            href="/other-products"
            className="text-black hover:bg-[#1b6cb4] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Other Products
          </Link>
          {/* Add more mobile menu links and dropdowns as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;