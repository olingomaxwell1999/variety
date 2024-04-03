// import Link from "next/link";
// import Logo from "../../../assets/varietylogo.png";
// import Image from "next/image";
// import { FaShoppingBag } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-full h-20 sticky top-0 main-nav z-10 bg-white">
//         <div className="container px-4 h-full">
//           <div className="flex justify-between items-center h-full">
//             <Link href="/home">
//               <Image src={Logo} height={60} alt="logo" />
//             </Link>
//             <ul className="hidden md:flex gap-x-6 text-black">
//               <li>
//                 <Link href="/">
//                   <p>Home</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/tiles">
//                   <p>Tiles</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/taps">
//                   <p>Taps & Showers</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sanitary">
//                   <p>Sanitary & BathCo</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sinks">
//                   <p>Sinks</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marble">
//                   <p>Granite & Marble</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/mirors">
//                   <p>Mirrors</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact">
//                   <p>Contact Us</p>
//                 </Link>
//               </li>
//             </ul>
//             <Link href="/cart">
//               <FaShoppingBag />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import Logo from "../../../assets/varietylo.png";
import Image from "next/image";
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/tiles">
                  <p>Tiles</p>
                </Link>
              </li>
              <li>
                <Link href="/taps">
                  <p>Taps & Showers</p>
                </Link>
              </li>
              <li>
                <Link href="/sanitary">
                  <p>Sanitary & BathCo</p>
                </Link>
              </li>
              <li>
                <Link href="/sinks">
                  <p>Sinks</p>
                </Link>
              </li>
              <li>
                <Link href="/marble">
                  <p>Granite & Marble</p>
                </Link>
              </li>
              <li>
                <Link href="/mirors">
                  <p>Mirrors</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            <Link href="/cart">
              <FaShoppingBag />
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
