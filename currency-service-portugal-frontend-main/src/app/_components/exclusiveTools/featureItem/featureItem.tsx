// src/app/_components/exclusiveTools/featureItem/featureItem.tsx

"use client";

import React from 'react';
import { FeatureItemProps } from './featureItem.types';

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text, number }) => {
  return (
    <li className="flex items-center space-x-3">
      {icon}
      <span className="text-gray-800 text-lg">
        {text} <span className="text-purple-500 font-bold">{number}</span>
      </span>
    </li>
  );
};

export default FeatureItem;
