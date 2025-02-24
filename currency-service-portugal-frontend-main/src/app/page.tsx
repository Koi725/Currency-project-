// src/app/page.tsx
import React from 'react';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import TopCard from '@/components/TopCard/TopCard';
import FlashCards from '@/components/FlashCards/FlashCards';
import TradingChallenge from '@/components/TradingChallenge/TradingChallenge';
import JoinFxVibe from '@/components/JoinFxVibe/JoinFxVibe';
import ExclusiveTools from '@/components/ExclusiveTools/ExclusiveTools';
import HeroSection from '@/components/HeroSection/HeroSection';
import FeaturedPlatforms from '@/components/FeaturedPlatforms/FeaturedPlatform';
import Reasons from '@/components/Reasons/Reason';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonial';
import Footer from '@/components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <TopCard />
      <FlashCards/>
      <TradingChallenge/>
      <JoinFxVibe/>
      <ExclusiveTools/>
      <HeroSection />
      <FeaturedPlatforms />
      <Reasons />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
