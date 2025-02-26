// src/app/about-us/about-us.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        
        {/* Introduction */}
        <h1 className="text-5xl font-bold mb-4 text-purple-700">
          About Us
        </h1>
        <p className="text-lg mb-12 text-gray-600">
          At FxVibe, we believe in breaking boundaries and achieving the impossible.
          Our team is dedicated to bringing you the best trading experience while ensuring growth and success.
        </p>
        
        {/* Team Members */}
        <h2 className="text-3xl font-bold mb-8 text-purple-600">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Example Team Member 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/images/team/kousha.png"
              alt="Front-End"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Nasrin Shakery</h3>
            <p className="text-gray-600">Front-End</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Example Team Member 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/images/team/micro.png"
              alt="Leader"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Mahdi Abasi</h3>
            <p className="text-gray-600">Lead Developer</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Example Team Member 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/images/team/ai.png"
              alt="Back-End"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Ellamin</h3>
            <p className="text-gray-600"> Back-End && DataBase</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission */}
        <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Vision & Mission</h2>
        <p className="text-lg mb-12 text-gray-600">
          We strive to empower traders worldwide by providing innovative solutions and tools.
          Our mission is to make trading accessible, enjoyable, and profitable for everyone.
        </p>

        {/* Call to Action */}
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
          Join FxVibe Today 🚀
        </button>
      </div>
    </section>
  );
}
