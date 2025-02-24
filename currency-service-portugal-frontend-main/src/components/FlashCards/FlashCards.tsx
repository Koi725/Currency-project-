"use client";

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TopCard = () => {
  const cards = [
    { currency: "USD / JPY", change: "+0.04%", rate: "¥1.22196", action: "Trade" },
    { currency: "EUR / GBP", change: "-0.12%", rate: "£0.85368", action: "Trade" },
    { currency: "GBP / USD", change: "+0.05%", rate: "$1.24100", action: "Trade" },
    { currency: "AUD / USD", change: "-0.08%", rate: "$0.77250", action: "Trade" },
    { currency: "EUR / USD", change: "+0.02%", rate: "$1.18300", action: "Trade" },
    { currency: "USD / CAD", change: "+0.03%", rate: "C$1.25010", action: "Trade" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-purple-800 to-purple-900 py-20 text-white mt-6">
      <h2 className="text-center text-3xl font-bold mb-8">Live Forex Rates</h2>
      <div className="container mx-auto flex justify-center items-center space-x-8 relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-3xl text-white hover:text-purple-400 transition-transform transform -translate-x-8"
        >
          <FaChevronLeft />
        </button>

        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-purple-700 rounded-lg shadow-lg p-6 w-64 text-center transition-all duration-500 ${
              index === currentIndex
                ? 'opacity-100 scale-110 blur-0'
                : 'opacity-50 scale-90 blur-sm'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{card.currency}</h3>
            <p className={`text-sm mb-4 ${card.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
              {card.change}
            </p>
            <p className="text-2xl font-bold">{card.rate}</p>
            <button className="bg-yellow-400 text-black mt-4 px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              {card.action}
            </button>
          </div>
        ))}

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-3xl text-white hover:text-purple-400 transition-transform transform translate-x-8"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TopCard;
