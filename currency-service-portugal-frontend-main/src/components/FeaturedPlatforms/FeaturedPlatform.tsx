// src/components/FeaturedPlatforms/FeaturedPlatforms.tsx
import React from 'react';

const FeaturedPlatforms = () => {
  const platforms = ["xfinity", "Sysco", "Progress", "Laren", "Dopxior", "Woocube", "Brex", "Make It"];
  
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">We Are Featured In</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {platforms.map((platform, index) => (
          <div key={index} className="text-gray-400 text-2xl">{platform}</div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlatforms;
