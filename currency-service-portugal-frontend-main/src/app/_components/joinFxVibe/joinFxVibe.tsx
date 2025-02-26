// src/app/_components/JoinFxVibe/joinFxVibe.tsx
"use client";

import React from 'react';
import SocialIcons from './socialicons/socialIcons';
import JoinButton from './joinButton/joinButton';

const JoinFxVibe = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 py-20 text-center text-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Join FxVibe & Begin!</h2>
        <p className="text-lg mb-8">
          Connect with us on social media and start your trading journey.
        </p>

        {/* Social Icons Component */}
        <SocialIcons />

        {/* Start Trading Button (Optional) */}
        <JoinButton />
      </div>
    </section>
  );
};

export default JoinFxVibe;
