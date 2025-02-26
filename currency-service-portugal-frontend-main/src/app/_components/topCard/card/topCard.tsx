// src/app/_components/TopCard/topCard.tsx
"use client";
import React from 'react';
import Card from './card';

const TopCard = () => {
  const cards = [
    { currency: "USD / JPY", change: "+0.04%", rate: "¥1.22196", action: "Trade" },
    { currency: "EUR / GBP", change: "-0.12%", rate: "£0.85368", action: "Trade" },
    { currency: "GBP / USD", change: "+0.05%", rate: "$1.24100", action: "Trade" }
  ];

  return (
    <section className="mt-16 py-16 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative text-white">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none"></div>
      <h2 className="text-center text-4xl font-bold mb-12">Top Pairs & Pricing in Market</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card 
            key={index}
            currency={card.currency}
            change={card.change}
            rate={card.rate}
            action={card.action}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCard;
