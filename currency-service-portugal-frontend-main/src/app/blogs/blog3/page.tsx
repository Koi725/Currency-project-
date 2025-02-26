// src/app/blogs/blog3/page.tsx

"use client";

import React from 'react';
import Image from 'next/image';

const Blog3 = () => {
  return (
    <section className="p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Why Altcoins are Gaining Popularity</h1>
      <p className="text-lg mb-6">Exploring the reasons behind the surge of alternative cryptocurrencies.</p>
      <Image
        src="/images/hero/image3.jpg"
        alt="Altcoins Popularity"
        width={1200}
        height={600}
      />
      <article className="mt-8 text-gray-600">
        <p>
          As Bitcoin paves the way, several other cryptocurrencies, known as altcoins, are gaining traction.
        </p>
      </article>
    </section>
  );
};

export default Blog3;
