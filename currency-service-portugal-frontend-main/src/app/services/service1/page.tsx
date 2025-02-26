// src/app/services/service1/page.tsx

"use client";

import React from 'react';

const Service1 = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Service 1: Advanced Trading Tools</h1>
      <p className="text-gray-600 mb-4">
        Elevate your trading with our state-of-the-art trading tools designed for precision and efficiency.
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Real-time Market Analysis</li>
        <li>Automated Trading Signals</li>
        <li>Personalized Trading Dashboard</li>
      </ul>

      {/* Future Image Placeholder */}
      {/* <Image
        src={'/images/services/service1.jpg'}
        alt="Service 1"
        width={800}
        height={600}
      /> */}
    </section>
  );
};

export default Service1;
