"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [dropdown, setDropdown] = useState('');
  const [openedBy, setOpenedBy] = useState<'click' | 'hover' | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdown) {
        const parentLi = document.querySelector(`[data-dropdown="${dropdown}"]`);
        if (parentLi && !parentLi.contains(event.target as Node)) {
          setDropdown('');
          setOpenedBy(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  // Toggle dropdown and track how it was opened
  const toggleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown('');
      setOpenedBy(null);
    } else {
      setDropdown(menu);
      setOpenedBy('click');
    }
  };

  return (
    <header className="bg-gradient-to-r from-black via-purple-900 to-purple-800 text-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-accent">
          FxVibe
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {/* Home Dropdown */}
          <li
            data-dropdown="home"
            className="relative group"
            onMouseEnter={() => { setDropdown('home'); setOpenedBy('hover') }}
            onMouseLeave={() => openedBy === 'hover' && setDropdown('')}
          >
            <button
              className="hover:text-purple-300 transition-all"
              onClick={() => toggleDropdown('home')}
            >
              Home
            </button>
            {dropdown === 'home' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Option 1</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Option 2</li>
              </ul>
            )}
          </li>

          {/* About Dropdown */}
          <li
            data-dropdown="about"
            className="relative group"
            onMouseEnter={() => { setDropdown('about'); setOpenedBy('hover') }}
            onMouseLeave={() => openedBy === 'hover' && setDropdown('')}
          >
            <button
              className="hover:text-purple-300 transition-all"
              onClick={() => toggleDropdown('about')}
            >
              About
            </button>
            {dropdown === 'about' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="hover:bg-purple-200 px-4 py-2 rounded">About Company</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">History</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Team Members</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">FAQ's</li>
              </ul>
            )}
          </li>

          {/* Trading (No Dropdown) */}
          <li className="hover:text-purple-300 transition-all">
            <button>Trading</button>
          </li>

          {/* Services Dropdown */}
          <li
            data-dropdown="services"
            className="relative group"
            onMouseEnter={() => { setDropdown('services'); setOpenedBy('hover') }}
            onMouseLeave={() => openedBy === 'hover' && setDropdown('')}
          >
            <button
              className="hover:text-purple-300 transition-all"
              onClick={() => toggleDropdown('services')}
            >
              Services
            </button>
            {dropdown === 'services' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Service 1</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Service 2</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Service 3</li>
              </ul>
            )}
          </li>

          {/* Blog Dropdown */}
          <li
            data-dropdown="blog"
            className="relative group"
            onMouseEnter={() => { setDropdown('blog'); setOpenedBy('hover') }}
            onMouseLeave={() => openedBy === 'hover' && setDropdown('')}
          >
            <button
              className="hover:text-purple-300 transition-all"
              onClick={() => toggleDropdown('blog')}
            >
              Blog
            </button>
            {dropdown === 'blog' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Blog 1</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Blog 2</li>
                <li className="hover:bg-purple-200 px-4 py-2 rounded">Blog 3</li>
              </ul>
            )}
          </li>

          {/* Contact Dropdown */}
          <li
            data-dropdown="contact"
            className="relative group"
            onMouseEnter={() => { setDropdown('contact'); setOpenedBy('hover') }}
            onMouseLeave={() => openedBy === 'hover' && setDropdown('')}
          >
            <button
              className="hover:text-purple-300 transition-all"
              onClick={() => toggleDropdown('contact')}
            >
              Contact
            </button>
            {dropdown === 'contact' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="flex items-center space-x-2 hover:bg-purple-200 px-4 py-2 rounded">
                  <FaWhatsapp className="text-green-600" /> <span>WhatsApp</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-purple-200 px-4 py-2 rounded">
                  <FaTelegram className="text-blue-500" /> <span>Telegram</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-purple-200 px-4 py-2 rounded">
                  <FaLinkedin className="text-blue-700" /> <span>LinkedIn</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-purple-200 px-4 py-2 rounded">
                  <FaTwitter className="text-blue-400" /> <span>Twitter</span>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* User & Phone */}
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-purple-500">
            Users Login
          </button>
          <span className="hidden md:block text-sm">+1 800 766-1234</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;