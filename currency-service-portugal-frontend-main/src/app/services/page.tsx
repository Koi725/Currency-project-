// src/app/services/page.tsx

"use client";

import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 text-purple-800">Our Services</h2>
      <p className="text-gray-600 mb-12">Explore the exclusive services we offer to enhance your trading journey.</p>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
          <p className="text-gray-600 mb-4">
            Discover how we can enhance your trading with our specialized tools.
          </p>
          <Link href="/services/service1" className="text-purple-600 hover:text-purple-800 transition">
            Learn More &rarr;
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
          <p className="text-gray-600 mb-4">
            Maximize your potential with our tailored trading solutions.
          </p>
          <Link href="/services/service2" className="text-purple-600 hover:text-purple-800 transition">
            Learn More &rarr;
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
          <p className="text-gray-600 mb-4">
            Step into the future of trading with our innovative tools.
          </p>
          <Link href="/services/service3" className="text-purple-600 hover:text-purple-800 transition">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
