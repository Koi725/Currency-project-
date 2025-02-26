// src/app/_components/TopCard/card.tsx
import React from 'react';

interface CardProps {
  currency: string;
  change: string;
  rate: string;
  action: string;
}

const Card: React.FC<CardProps> = ({ currency, change, rate, action }) => {
  return (
    <div 
      className="bg-purple-700 bg-opacity-90 rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-600 transition duration-300 ease-in-out p-8 text-center transform hover:scale-105"
    >
      <h3 className="text-2xl font-semibold mb-2">{currency}</h3>
      <p className={`text-lg mb-4 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </p>
      <p className="text-3xl font-bold mb-6">{rate}</p>
      <button className="bg-yellow-500 text-darkGray px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300">
        {action}
      </button>
    </div>
  );
};

export default Card;
