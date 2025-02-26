// src/components/Navbar/Navbar.tsx ==> Address 
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">FxVibe</div>
        <ul className="flex space-x-8">
          <li className="hover:text-purple-300 cursor-pointer">Home</li>
          <li className="hover:text-purple-300 cursor-pointer">About</li>
          <li className="hover:text-purple-300 cursor-pointer">Trading</li>
          <li className="hover:text-purple-300 cursor-pointer">Services</li>
          <li className="hover:text-purple-300 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded">
          Users Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;