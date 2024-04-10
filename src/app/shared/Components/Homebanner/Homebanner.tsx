"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Homebanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Banners.png",
      title: "Close couple Offers",
      description: "70% off",
    },
    {
      image: "/BannersGranite.png",
      title: "Close Couple Offers",
      description: "70% off",
    },
    {
      image: "/BannersTiles.png",
      title: "Close Couple Offers",
      description: "70% off",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative h-80 Homebanner">
      {" "}
      {/* Change 'h-screen' to 'h-80' */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative text-white text-center">
            <h2 className="text-xl uppercase font-bold mb-4">{slide.title}</h2>
            <p className="text-4xl font-extrabold mb-4">{slide.description}</p>
            <Link href="/offers">
              <button className="button">Get offer now</button>
            </Link>
          </div>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Homebanner;
