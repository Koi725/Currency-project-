// src/components/HeroSection/HeroSection.tsx ==> Address 
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[url('/public/hero-bg.jpg')] bg-cover bg-center text-white">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-5xl font-bold">Seamless Trading with MT4 & MT5 Platform</h1>
        <p className="mt-4 text-lg">Transforming Trades, Elevating Profits.</p>
        <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded">
          Start Trading
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
