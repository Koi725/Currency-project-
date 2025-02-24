// src/components/Footer/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2025 Fxvibe Made with Expertise, All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-purple-300">Privacy Policy</a>
          <a href="#" className="hover:text-purple-300">Terms & Conditions</a>
          <a href="#" className="hover:text-purple-300">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
