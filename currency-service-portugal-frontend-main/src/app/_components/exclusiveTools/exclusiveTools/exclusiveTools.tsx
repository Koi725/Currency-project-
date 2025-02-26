// src/app/_components/exclusiveTools/exclusiveTools.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FaBolt, FaMobileAlt, FaExchangeAlt } from 'react-icons/fa';
import { ExclusiveToolsProps } from './exclusiveTools.types';
import FeatureItem from '../featureItem/featureItem';
import CtaButtons from '../ctaButtons/ctaButtons';
import MotivationalQuote from '../motivationalQuote/motivationalQuote';

const featuresData = [
  { icon: <FaBolt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "Ultra fast trade execution", number: "01" },
  { icon: <FaMobileAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "Trading from a smartphone or tablet", number: "02" },
  { icon: <FaExchangeAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "No dealing desk, no requotes", number: "03" }
];

const ExclusiveTools: React.FC<ExclusiveToolsProps> = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="lg:w-2/3">
          <h3 className="text-purple-600 font-bold text-sm uppercase mb-2 tracking-wider">Platform</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Use MT4? Get exclusive tools with FxVibe
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Discover the power of advanced trading tools to elevate your trading experience. Enhance your strategies with precision.
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {featuresData.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                text={feature.text}
                number={feature.number}
              />
            ))}
          </ul>

          {/* Call to Action Buttons */}
          <CtaButtons />

          {/* Motivational Quote */}
          <MotivationalQuote />
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 relative">
          <Image
            src={'/images/hero/image4.png'}
            alt="Trading Chart"
            width={500}
            height={500}
            className="w-full h-auto max-w-sm rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
    </section>
  );
};

export default ExclusiveTools;
