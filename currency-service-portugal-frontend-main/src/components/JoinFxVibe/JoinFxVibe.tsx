"use client";

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

const JoinFxVibe = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 py-20 text-center text-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Join FxVibe & Begin!</h2>
        <p className="text-lg mb-8">Connect with us on social media and start your trading journey.</p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="group text-purple-200 hover:text-white transition transform hover:scale-110"
          >
            <FaFacebookF className="text-3xl group-hover:text-blue-600 transition" />
          </a>
          <a
            href="#"
            className="group text-purple-200 hover:text-white transition transform hover:scale-110"
          >
            <FaTwitter className="text-3xl group-hover:text-blue-400 transition" />
          </a>
          <a
            href="#"
            className="group text-purple-200 hover:text-white transition transform hover:scale-110"
          >
            <FaInstagram className="text-3xl group-hover:text-pink-600 transition" />
          </a>
          <a
            href="#"
            className="group text-purple-200 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedinIn className="text-3xl group-hover:text-blue-700 transition" />
          </a>
          <a
            href="#"
            className="group text-purple-200 hover:text-white transition transform hover:scale-110"
          >
            <FaYoutube className="text-3xl group-hover:text-red-600 transition" />
          </a>
        </div>

        {/*
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
          🚀 START TRADING
        </button>
        */}
      </div>
    </section>
  );
};

export default JoinFxVibe;
