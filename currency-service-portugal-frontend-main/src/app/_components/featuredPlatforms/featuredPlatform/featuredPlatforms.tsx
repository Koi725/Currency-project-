// src/app/_components/FeaturedPlatforms/featuredPlatform/FeaturedPlatforms.tsx
import React from 'react';

const FeaturedPlatforms = () => {
  const platforms = [
    "xfinity",
    "Sysco",
    "Progress",
    "Laren",
    "Dopxior",
    "Woocube",
    "Brex",
    "Make It"
  ];
  
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">We Are Featured In</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {platforms.map((platform, index) => (
          <div 
            key={index} 
            className="text-gray-500 text-xl hover:text-purple-600 transition duration-300"
          >
            {platform}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlatforms;
