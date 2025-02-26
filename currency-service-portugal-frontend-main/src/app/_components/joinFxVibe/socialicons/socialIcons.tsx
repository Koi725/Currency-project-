// src/app/_components/JoinFxVibe/socialIcons.tsx
"use client";

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

const SocialIcons = () => {
  const icons = [
    { icon: <FaFacebookF className="text-3xl group-hover:text-blue-600 transition" />, href: "#" },
    { icon: <FaTwitter className="text-3xl group-hover:text-blue-400 transition" />, href: "#" },
    { icon: <FaInstagram className="text-3xl group-hover:text-pink-600 transition" />, href: "#" },
    { icon: <FaLinkedinIn className="text-3xl group-hover:text-blue-700 transition" />, href: "#" },
    { icon: <FaYoutube className="text-3xl group-hover:text-red-600 transition" />, href: "#" }
  ];

  return (
    <div className="flex justify-center space-x-6 mb-8">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group text-purple-200 hover:text-white transition transform hover:scale-110"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
