// src/app/_components/header/logo/Logo.tsx
import React, { FC } from 'react';
import Link from 'next/link';

const Logo: FC = () => {
  return (
    <Link href="/" className="logo-link">
      FxVibe
    </Link>
  );
};

export default Logo;
