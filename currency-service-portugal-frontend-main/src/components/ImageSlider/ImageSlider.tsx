"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Image paths
const slides = [
  {
    image: '/Images/hero/image1.jpg',
    text: 'Beyond Boundaries, Beyond Profits.'
  },
  {
    image: '/Images/hero/image2.jpg',
    text: 'Infinite Possibilities, One Forex Firm.'
  },
  {
    image: '/Images/hero/image3.jpg',
    text: 'Trading Tomorrow, Today.'
  }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <Image
          src={slides[currentSlide].image}
          alt="Slide Image"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={true}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
        {slides[currentSlide].text}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
      >
        <FaChevronLeft />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
