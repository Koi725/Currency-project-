// src/app/_components/FlashCards/flashCardsSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import FlashCard from '../flashCard/flashCards';
import CardSlider from '../cardSlider/cardSlider';
import { cards } from '@/data/flashcards.data';

const FlashCardsSection = () => {
  // const cards = [
  //   { currency: "USD / JPY", change: "+0.04%", rate: "¥1.22196", action: "Trade" },
  //   { currency: "EUR / GBP", change: "-0.12%", rate: "£0.85368", action: "Trade" },
  //   { currency: "GBP / USD", change: "+0.05%", rate: "$1.24100", action: "Trade" },
  //   { currency: "AUD / USD", change: "-0.08%", rate: "$0.77250", action: "Trade" },
  //   { currency: "EUR / USD", change: "+0.02%", rate: "$1.18300", action: "Trade" },
  //   { currency: "USD / CAD", change: "+0.03%", rate: "C$1.25010", action: "Trade" }
  // ];

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
        <CardSlider nextSlide={nextSlide} prevSlide={prevSlide} />
        {cards.map((card, index) => (
          <FlashCard
            key={index}
            currency={card.currency}
            change={card.change}
            rate={card.rate}
            action={card.action}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashCardsSection;
