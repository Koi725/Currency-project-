// src/app/_components/Reasons/reasonItem.tsx
"use client";

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ReasonItemProps {
  reason: string;
  highlight?: boolean;
}

const ReasonItem: React.FC<ReasonItemProps> = ({ reason, highlight }) => {
  return (
    <div 
      className={`flex items-center space-x-3 rounded-full px-4 py-2 bg-black bg-opacity-60 hover:bg-opacity-80 transition ${
        highlight ? 'bg-purple-600' : ''
      }`}
    >
      <FaCheckCircle className="text-white" />
      <span className="text-white">{reason}</span>
    </div>
  );
};

export default ReasonItem;
