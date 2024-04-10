"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../../assets/variety-white-logo.png";
import Logo2 from "../../../../../public/FOOTERAEO.png";
import Logo3 from "../../../../../public/FOOTERISO.png";
import Logo4 from "../../../../../public/FOOTERQUALITY.png";
import { AiFillInstagram } from "react-icons/ai";

type FooterProps = {
  children: ReactNode;
};
const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | string>("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div>
      <div className="main-footer">
        <div className="top-footer">
          <Image src={Logo} alt="logo" width={200} height={100} />
          <Image src={Logo2} alt="logo" width={100} height={100} />
          <Image src={Logo3} alt="logo" width={100} height={100} />
          <Image src={Logo4} alt="logo" width={100} height={100} />
        </div>
        <hr />
        <div className="middle-footer">
          <div className="text">
            <p>
              Hello we are always open for coopration and suggestions, contuct
              us in one of the ways below.
            </p>

            <h3>Headquater:</h3>

            <p>Opposite JKIA Airport</p>

            <p>Heading towards Nairobi, Nairobi, Kenya</p>

            <h3>call/whatsapp:0723670300</h3>
          </div>
          <div className="text">
            <h3>Product categories</h3>

            <ul>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Tiles
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Marble
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Granite
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Mirrors
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Sanitary Ware
                </Link>
              </li>
            </ul>
          </div>
          <div className="text upmove">
            <h3>Information</h3>

            <ul>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="text">
            <h3>Our Policies</h3>

            <ul>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Shipping by Brand
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Terms of Sale
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/varietyflooring?lang=en">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="footer-bottom-icon">
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
              <p>©Variety</p>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-sides">
          <p>Copyrights {currentYear} &copy; Variety. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
