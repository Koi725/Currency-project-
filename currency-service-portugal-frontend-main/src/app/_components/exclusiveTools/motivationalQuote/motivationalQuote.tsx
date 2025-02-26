// src/app/_components/exclusiveTools/motivationalQuote/motivationalQuote.tsx

"use client";

import React from 'react';
import { MotivationalQuoteProps } from './motivationalQuote.types';

const MotivationalQuote: React.FC<MotivationalQuoteProps> = ({ quote }) => {
  return (
    <p className="mt-8 italic text-gray-500">
      {quote || "The best time to trade was yesterday. The next best time is now."}
    </p>
  );
};

export default MotivationalQuote;
