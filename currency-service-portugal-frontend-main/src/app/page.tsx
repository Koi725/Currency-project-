// src/app/page.tsx
import './globals.css';
import React from 'react';
import ImageSlider from './_components/imageSlider/imageSlider';
import TopCard from './_components/topCard/card/topCard';
import FlashCards from './_components/flashCards/flashCardsSection/flashCardsSection';
import TradingChallenge from './_components/tradingChallenge/tradingChallenge';
import JoinFxVibe from './_components/joinFxVibe/joinFxVibe';
import { ExclusiveTools } from './_components/exclusiveTools/exclusiveTools';
import HeroSection from './_components/heroSection/heroSection';
import { FeaturedPlatforms } from '@/app/_components/featuredPlatforms/featuredPlatform';
import Reasons from './_components/reasons/reason/reasons';
import HowItWorks from './_components/howItWorks/howItWorks';
import Testimonials from './_components/testimonials/testimonial';
import { Footer } from './_components/footer';
import { FaBolt, FaMobileAlt, FaExchangeAlt } from 'react-icons/fa';

const HomePage = () => {
  // Add this features array
  const features = [
    { icon: <FaBolt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "Ultra fast trade execution", number: "01" },
    { icon: <FaMobileAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "Trading from a smartphone or tablet", number: "02" },
    { icon: <FaExchangeAlt className="text-purple-600 text-xl transition-transform transform hover:scale-110" />, text: "No dealing desk, no requotes", number: "03" }
  ];

  return (
    <>
      <ImageSlider />
      <TopCard />
      <FlashCards />
      <TradingChallenge />
      <JoinFxVibe />
      {/* Pass the features prop here */}
      <ExclusiveTools features={features} />
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
