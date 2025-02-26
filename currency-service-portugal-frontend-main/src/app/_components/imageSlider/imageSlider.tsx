"use client";
import React, { useState, useEffect } from 'react';
import Slide from './slider/slide';
import SlideNavigation from './slider/slideNavigation';

// Image paths
const slides = [
  {
    image: '/images/hero/image1.jpg',
    text: 'Beyond Boundaries, Beyond Profits.'
  },
  {
    image: '/images/hero/image2.jpg',
    text: 'Infinite Possibilities, One Forex Firm.'
  },
  {
    image: '/images/hero/image3.jpg',
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
      {slides.map((slideData, index) => (
        <Slide 
          key={index}
          image={slideData.image}
          text={slideData.text}
          isVisible={index === currentSlide}
        />
      ))}
      <SlideNavigation nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

export default ImageSlider;
