"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Homebanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/BannersGranite.png",
      title: "Welcome To Variety Flooring Works Ltd",
      description: "Home To Quality",
    },
    {
      image: "/BannersTiles.png",
      title: "Welcome To Variety Flooring Works Ltd",
      description: "Home To Quality",
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <h2 className="text-xl uppercase font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-4xl font-extrabold mb-4">
                {slide.description}
              </p>
              <Link href="/deals">
                <button className="button">Special Deals</button>
              </Link>
              <Link href="/enquiry">
                <button className="button ml-3 enquire">Enquire</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homebanner;
