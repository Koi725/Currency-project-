// src/app/_components/FlashCards/cardSlider.tsx
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CardSliderProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

const CardSlider: React.FC<CardSliderProps> = ({ nextSlide, prevSlide }) => {
  return (
    <>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 text-3xl text-white hover:text-purple-400 transition-transform transform -translate-x-8"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 text-3xl text-white hover:text-purple-400 transition-transform transform translate-x-8"
      >
        <FaChevronRight />
      </button>
    </>
  );
};

export default CardSlider;
