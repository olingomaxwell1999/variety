import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./shared/styles/globals.scss";
import Navbar from "./shared/Components/Navbar/Navbar";
import Footer from "./shared/Components/Footer/Footer";
import TopNav from "./shared/Components/Navbar/TopNav";
import WhatsAppButton from "./shared/Components/WhatsAppButton/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Variety",
  description:
    "This is a world class distributer of tiles, taps, showers, marble and granire, mirrors and toilets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <Navbar />
        {children}
        <WhatsAppButton phoneNumber="+254742839572" />
        <Footer />
      </body>
    </html>
  );
}
