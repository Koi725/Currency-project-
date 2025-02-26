// src/app/_components/FlashCards/flashCard.tsx
import React from 'react';

interface FlashCardProps {
  currency: string;
  change: string;
  rate: string;
  action: string;
  isActive: boolean;
}

const FlashCard: React.FC<FlashCardProps> = ({ currency, change, rate, action, isActive }) => {
  return (
    <div
      className={`bg-purple-700 rounded-lg shadow-lg p-6 w-64 text-center transition-all duration-500 ${
        isActive ? 'opacity-100 scale-110 blur-0' : 'opacity-50 scale-90 blur-sm'
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{currency}</h3>
      <p className={`text-sm mb-4 ${change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
        {change}
      </p>
      <p className="text-2xl font-bold">{rate}</p>
      <button className="bg-yellow-400 text-black mt-4 px-6 py-2 rounded-full hover:bg-yellow-500 transition">
        {action}
      </button>
    </div>
  );
};

export default FlashCard;
