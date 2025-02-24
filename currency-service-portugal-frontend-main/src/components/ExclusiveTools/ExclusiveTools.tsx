"use client";

import React from 'react';
import { FaBolt, FaMobileAlt, FaExchangeAlt } from 'react-icons/fa';
import Image from 'next/image';
import ChartImage from '../../../public/Images/hero/image4.png'; 

const ExclusiveTools = () => {
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
            <li className="flex items-center space-x-3">
              <FaBolt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />
              <span className="text-gray-800 text-lg">Ultra fast trade execution <span className="text-purple-500 font-bold">01</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMobileAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />
              <span className="text-gray-800 text-lg">Trading from a smartphone or tablet <span className="text-purple-500 font-bold">02</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FaExchangeAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />
              <span className="text-gray-800 text-lg">No dealing desk, no requotes <span className="text-purple-500 font-bold">03</span></span>
            </li>
          </ul>

          {/* Call to Action */}
          <div className="space-x-4">
            <button className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition">
              🚀 START TRADING
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              📘 Learn More
            </button>
          </div>

          {/* Motivational Quote */}
          <p className="mt-8 italic text-gray-500">
            The best time to trade was yesterday. The next best time is now.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 relative">
          <Image
            src={ChartImage}
            alt="Trading Chart"
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
