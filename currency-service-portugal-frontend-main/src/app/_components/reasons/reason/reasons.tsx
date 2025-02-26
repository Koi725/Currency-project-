// src/app/_components/Reasons/reasons.tsx
"use client";

import React from 'react';
import ReasonItem from './reasonItem';
import CenterImage from '../centerimage/centerImage';
import BottomDescription from '../bottomDescription/bottomDescription';


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
              <ReasonItem 
                key={index} 
                reason={reason}
                highlight={index === 1}
              />
            ))}
          </div>

          {/* Center Image */}
          <CenterImage/>

          {/* Right Column */}
          <div className="space-y-6 lg:w-1/3">
            {reasons.map((reason, index) => (
              <ReasonItem 
                key={index} 
                reason={reason}
                highlight={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <BottomDescription />
      </div>
    </section>
  );
};

export default Reasons;
