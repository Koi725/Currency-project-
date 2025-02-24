"use client";

import React from 'react';
import Image from 'next/image';
import CityImage from '../../../public/Images/hero/image4.png';
import { FaCheckCircle } from 'react-icons/fa';

const Reasons = () => {
  const reasons = [
    "90% Virtual Profit Split",
    "10% Virtual Profit",
    "1-step Evaluation"
  ];

  return (
    <section className="bg-gradient-to-b from-purple-900 to-purple-800 py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-purple-400 font-bold text-sm uppercase mb-2 tracking-wider">Key Highlights</h3>
        <h2 className="text-4xl font-bold text-white mb-10">
          Reasons for choosing us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left Column */}
          <div className="space-y-6 lg:w-1/3">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 rounded-full px-4 py-2 bg-black bg-opacity-60 hover:bg-opacity-80 transition ${
                  index === 1 ? 'bg-purple-600' : ''
                }`}
              >
                <FaCheckCircle className="text-white" />
                <span className="text-white">{reason}</span>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative lg:w-1/3 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={CityImage}
              alt="City Skyline"
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

          {/* Right Column */}
          <div className="space-y-6 lg:w-1/3">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 rounded-full px-4 py-2 bg-black bg-opacity-60 hover:bg-opacity-80 transition ${
                  index === 0 ? 'bg-purple-600' : ''
                }`}
              >
                <FaCheckCircle className="text-white" />
                <span className="text-white">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold">90% Virtual Profit Split</h3>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Packages and web page editors now use lorem ipsum as their default model text, and a search for lorem will uncover many web sites still in their infancy. Various versions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
