"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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
