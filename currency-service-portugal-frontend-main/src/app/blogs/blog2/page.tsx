// src/app/blogs/blog2/page.tsx

"use client";

import React from 'react';
import Image from 'next/image';

const Blog2 = () => {
  return (
    <section className="p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">The Rise of Ethereum in Blockchain</h1>
      <p className="text-lg mb-6">Ethereum&apos;s smart contracts are changing the financial world.</p>
      <Image
        src="/images/hero/image2.jpg"
        alt="Ethereum Rise"
        width={1200}
        height={600}
      />
      <article className="mt-8 text-gray-600">
        <p>
          Ethereum is not just a cryptocurrency; it&apos;s a platform for decentralized applications.
        </p>
      </article>
    </section>
  );
};

export default Blog2;
