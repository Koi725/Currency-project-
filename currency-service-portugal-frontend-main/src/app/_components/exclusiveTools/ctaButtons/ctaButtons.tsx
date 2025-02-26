// src/app/_components/exclusiveTools/ctaButtons/ctaButtons.tsx

"use client";

import React from 'react';
import { CtaButtonsProps } from './ctaButtons.types';

const CtaButtons: React.FC<CtaButtonsProps> = ({ onStartTrading, onLearnMore }) => {
  return (
    <div className="cta-buttons space-x-4">
      <button 
        onClick={onStartTrading} 
        className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition"
      >
        🚀 START TRADING
      </button>
      <button 
        onClick={onLearnMore} 
        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
      >
        📘 Learn More
      </button>
    </div>
  );
};

export default CtaButtons;
