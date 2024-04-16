import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="icon-area">
        <ul>
          <li>
            <Link
              href="https://twitter.com/varietyflooring?lang=en"
              target="_@blank"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/varietyflooringlimited/"
              target="_@blank"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/varietyflooringworksltd/"
              target="_@blank"
            >
              <AiFillInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://ke.linkedin.com/company/variety-flooring-works-limited"
              target="_@blank"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="contact/#location">Location & Branches</Link>
          </li>
        </ul>
      </div>
      <div className="text-area">
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
