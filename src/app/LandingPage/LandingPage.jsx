import React from "react";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import WelcomeSection from "./WelcomeSection";
import LuxuryGifts from "./LuxuryGifts";
import WhyChooseSection from "./WhyChooseSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <WelcomeSection />
      <LuxuryGifts />
      <WhyChooseSection />
    </>
  );
};

export default LandingPage;
