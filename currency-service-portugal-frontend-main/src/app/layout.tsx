// src/app/layout.tsx
import React from 'react';

import "./globals.css";
import Header from './_components/header/header';

export const metadata = {
  title: 'Currency Web Page',
  description: 'Currency Web Page using Next.js App Router',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
