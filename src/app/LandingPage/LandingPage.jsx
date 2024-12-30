import React from "react";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import WelcomeSection from "./WelcomeSection";
import LuxuryGifts from "./LuxuryGifts";
import WhyChooseSection from "./WhyChooseSection";
import GiftingTrends from "./GiftingTrends";
import Designers from "./Designers";
import ProductGrid from "./ProductGrid";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <WelcomeSection />
      <LuxuryGifts />
      <WhyChooseSection />
      <GiftingTrends />
      <Designers />
      <ProductGrid />
    </>
  );
};

export default LandingPage;
