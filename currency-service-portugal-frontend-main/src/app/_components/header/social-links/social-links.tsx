// src/app/_components/header/socialLinks/SocialLinks.tsx
import Link from 'next/link';
import React, { FC } from 'react';
import { FaWhatsapp, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks: FC = () => {
  return (
    <ul className="social-links">
      <li className="social-link-item">
        <FaWhatsapp className="text-green-600" /> <span>WhatsApp</span>
      </li>
      <li className="social-link-item">
        <FaTelegram className="text-blue-500" /> <Link href={'#'}>Telegram</Link>
      </li>
      <li className="social-link-item">
        <FaLinkedin className="text-blue-500" /> <Link href={'#'}>Telegram</Link>
      </li>
      <li className="social-link-item">
        <FaTwitter className="text-blue-500" /> <Link href={'#'}>Telegram</Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
