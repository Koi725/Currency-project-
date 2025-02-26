"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SocialLinks from '../social-links/social-links';

const NavMenu = () => {
  const [dropdown, setDropdown] = useState<string>('');

  // Toggle dropdown menu
  const toggleDropdown = (menu: string) => {
    if (dropdown === menu) setDropdown('');
    else setDropdown(menu);
  };

  return (
    <ul className="nav-menu">
      <li onMouseEnter={() => toggleDropdown('services')}>
      </li>
      <li>
        <Link href="/" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="nav-item">
          About
        </Link>
      </li>
      <li>
        <Link href="/trading" className="nav-item">
          Trading
        </Link>
      </li>

      {/* Services Dropdown */}
      <li
        onMouseEnter={() => setDropdown('services')}
        onMouseLeave={() => setDropdown('')}
        className="dropdown-container"
      >
        <button className="dropdown-button">
          Services
        </button>
        {dropdown === 'services' && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link href="/services/service1">Service 1</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/services/service2">Service 2</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/services/service3">Service 3</Link>
            </li>
          </ul>
        )}
      </li>

      {/* Blog Dropdown */}
      <li
        onMouseEnter={() => setDropdown('blog')}
        onMouseLeave={() => setDropdown('')}
        className="dropdown-container"
      >
        <button className="dropdown-button">
          Blog
        </button>
        {dropdown === 'blog' && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link href="/blogs/blog1">Blog 1</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/blogs/blog2">Blog 2</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/blogs/blog3">Blog 3</Link>
            </li>
          </ul>
        )}
      </li>

      {/* Contact Dropdown */}
      <li
        onMouseEnter={() => setDropdown('contact')}
        onMouseLeave={() => setDropdown('')}
        className="dropdown-container"
      >
        <button className="dropdown-button">
          Contact
        </button>
        {dropdown === 'contact' && (
          <div className="dropdown-content">
            <SocialLinks/>
          </div>
        )}
      </li>
    </ul>
  );
};

export default NavMenu;
