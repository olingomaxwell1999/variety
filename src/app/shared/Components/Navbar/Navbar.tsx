"use client";
import Link from "next/link";
import Logo from "../../../assets/varietylo.png";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
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
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const NavLink: React.FC<NavLinkProps> = ({ title, href, dropdownLinks }) => {
    const handleClick = () => {
      toggleDropdown(0); // Toggle dropdown on click
    };

    return (
      <li className="relative">
        <div className="flex items-center justify-between" onClick={handleClick}>
          <Link href={href} onClick={isMenuOpen ? toggleMenu : undefined}>
            <p>{title}</p>
          </Link>
          {dropdownLinks && (
            <FaChevronDown
              className={`ml-2 transition-transform duration-300 ${
                activeDropdown === 0 ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {dropdownLinks && (
          <ul
            className={`absolute left-0 top-10 bg-blue-500 text-white shadow-md rounded-md w-48 p-2 duration-300 ease-in-out ${
              activeDropdown === 0 ? "opacity-100 visible" : "opacity-0 invisible"
            } z-20`}
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
    { title: "Granite & Marble", href: "/marble" },
    { title: "Mirrors", href: "/mirors" },
    { title: "Projects", href: "/projects" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className="navbar w-full h-20 sticky top-0 main-nav z-10 bg-white">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/home">
              <Image src={Logo} height={80} alt="logo" />
            </Link>
            <div className="md:hidden">
              <FaBars onClick={toggleMenu} />
            </div>
            <ul
              className={`md:flex md:gap-x-6 text-black absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto pl-9 md:pl-0 pb-4 duration-500 ease-in ${
                isMenuOpen ? "top-20 z-50" : "top-[-490px]"
              } ml-6 md:ml-20`}
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