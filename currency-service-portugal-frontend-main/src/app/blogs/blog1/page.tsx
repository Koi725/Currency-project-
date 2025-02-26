// src/app/blogs/blog1/page.tsx

"use client";

import React from 'react';
import Image from 'next/image';

const Blog1 = () => {
  return (
    <section className="p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Bitcoin&apos;s Future in Digital Currency</h1>
      <p className="text-lg mb-6">How Bitcoin is changing the landscape of digital finance.</p>
      <Image
        src="/images/hero/image1.jpg"
        alt="Bitcoin's Future"
        width={1200}
        height={600}
      />
      <article className="mt-8 text-gray-600">
        <p>
          Bitcoin has revolutionized the world of digital currency. From its inception to its current dominance in the market, Bitcoin&apos;s journey has been nothing short of extraordinary. But what does the future hold for this digital asset?
        </p>
      </article>
    </section>
  );
};

export default Blog1;
