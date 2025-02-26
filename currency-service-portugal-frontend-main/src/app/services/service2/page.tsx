// src/app/services/service2/page.tsx

"use client";

import React from 'react';

const Service2 = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Service 2: Tailored Trading Solutions</h1>
      <p className="text-gray-600 mb-4">
        Discover customized trading solutions to meet your unique financial goals and trading style.
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Personalized Risk Management</li>
        <li>Advanced Strategy Builder</li>
        <li>Exclusive Market Insights</li>
      </ul>

      {/* Future Image Placeholder */}
      {/* <Image
        src={'/images/services/service2.jpg'}
        alt="Service 2"
        width={800}
        height={600}
      /> */}
    </section>
  );
};

export default Service2;
