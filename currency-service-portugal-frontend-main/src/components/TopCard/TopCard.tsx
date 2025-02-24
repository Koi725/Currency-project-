// src/components/TopCard/TopCard.tsx
import React from 'react';

const TopCard = () => {
  const cards = [
    { currency: "USD / JPY", change: "+0.04%", rate: "¥1.22196", action: "Trade" },
    { currency: "EUR / GBP", change: "-0.12%", rate: "£0.85368", action: "Trade" },
    { currency: "GBP / USD", change: "+0.05%", rate: "$1.24100", action: "Trade" }
  ];

  return (
    <section className="mt-16 py-16 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative text-white">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none"></div>
      
      <h2 className="text-center text-4xl font-bold mb-12">Top Pairs & Pricing in Market</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-purple-700 bg-opacity-90 rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-600 transition duration-300 ease-in-out p-8 text-center transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2">{card.currency}</h3>
            <p className={`text-lg mb-4 ${card.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {card.change}
            </p>
            <p className="text-3xl font-bold mb-6">{card.rate}</p>
            <button className="bg-yellow-500 text-darkGray px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
              {card.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCard;
