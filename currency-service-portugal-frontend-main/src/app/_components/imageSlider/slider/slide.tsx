"use client";
import React from 'react';
import Image from 'next/image';

interface SlideProps {
  image: string;
  text: string;
  isVisible: boolean;
}

const slide: React.FC<SlideProps> = ({ image, text, isVisible }) => {
  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Image
        src={image}
        alt="Slide Image"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority={true}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
        {text}
      </div>
    </div>
  );
};

export default slide;
