// src/app/_components/Reasons/centerImage.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const CenterImage = () => {
  return (
    <div className="relative lg:w-1/3 rounded-lg overflow-hidden shadow-xl">
      <Image
        src={'/images/hero/image4.png'}
        alt="City Skyline"
        width={500}
        height={500}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-5 left-5 text-4xl font-bold text-white opacity-70">
        FxVibe
      </div>
      {/* Arrow Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-20 h-20 opacity-50 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      </div>
    </div>
  );
};

export default CenterImage;
