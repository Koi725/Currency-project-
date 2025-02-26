"use client";
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SlideNavigationProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

const slideNavigation: React.FC<SlideNavigationProps> = ({ nextSlide, prevSlide }) => {
  return (
    <>
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
    </>
  );
};

export default slideNavigation;
