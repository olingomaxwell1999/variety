"use client";
import Link from "next/link";
import Logo from "../../../assets/varietylo.png";
import Image from "next/image";
import { FaShoppingBag, FaBars, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface NavLinkProps {
  title: string;
  href: string;
  dropdownLinks?: { title: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const NavLink: React.FC<NavLinkProps> = ({ title, href, dropdownLinks }) => {
    return (
      <li className="relative group">
        <Link href={href}>
          <div className="flex items-center justify-between">
            <p>{title}</p>
            {dropdownLinks && (
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  activeDropdown === 0 ? "rotate-180" : ""
                }`}
                onClick={() => toggleDropdown(0)}
              />
            )}
          </div>
        </Link>
        {dropdownLinks && (
          <ul
            className={`absolute left-0 top-10 bg-blue-500 text-white shadow-md rounded-md w-48 p-2 duration-300 ease-in-out group-hover:opacity-100 group-hover:visible opacity-0 invisible`}
          >
            {dropdownLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  const navLinks: NavLinkProps[] = [
    { title: "Home", href: "/" },
    {
      title: "Tiles",
      href: "/tiles",
      dropdownLinks: [
        { title: "Floor Tiles", href: "/floor-tiles" },
        { title: "Wall Tiles", href: "/walltiles" },
      ],
    },
    { title: "Taps & Mixers", href: "/taps" },
    { title: "Sanitary & BathCo", href: "/sanitary" },
    { title: "Sinks", href: "/sinks" },
    {
      title: "Granite & Marble",
      href: "/marble",
    },
    { title: "Mirrors", href: "/mirors" },
    { title: "Projects", href: "/projects" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className="w-full h-20 sticky top-0 main-nav z-10 bg-white">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/home">
              <Image src={Logo} height={60} alt="logo" />
            </Link>
            <div className="md:hidden">
              <FaBars onClick={toggleMenu} />
            </div>
            <ul
              className={`md:flex md:gap-x-6 text-black absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto pl-9 md:pl-0 pb-4 duration-500 ease-in ${
                isMenuOpen ? "top-20 " : "top-[-490px]"
              }`}
            >
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  title={link.title}
                  href={link.href}
                  dropdownLinks={link.dropdownLinks}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
