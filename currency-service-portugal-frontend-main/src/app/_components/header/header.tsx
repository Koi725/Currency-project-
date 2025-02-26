// src/app/_components/header/Header.tsx
"use client";

import React, { FC } from 'react';
import Logo from './logo/logo';
import NavMenu from './navbar/navMenu';
import UserPhone from './userphone/userPhone';


const Header: FC = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <Logo />
        <NavMenu />
        <UserPhone />
      </nav>
    </header>
  );
};

export default Header;
