// src/app/services/service3/page.tsx

"use client";

import React from 'react';

const Service3 = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Service 3: Innovative Trading Platforms</h1>
      <p className="text-gray-600 mb-4">
        Step into the future of trading with our innovative platforms that provide seamless experiences.
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Cross-platform Compatibility</li>
        <li>Real-time Market Data Sync</li>
        <li>Secure and Fast Transactions</li>
      </ul>

      {/* Future Image Placeholder */}
      {/* <Image
        src={'/images/services/service3.jpg'}
        alt="Service 3"
        width={800}
        height={600}
      /> */}
    </section>
  );
};

export default Service3;
