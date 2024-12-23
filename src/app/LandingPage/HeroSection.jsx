import React from "react";
import BG from "../../assets/BG.png";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundColor: "rgba(89, 62, 42, 0.9)",
          backgroundBlend: "overlay",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
          Kevasiya Luxury Gifting
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Celebrate Life's Special Moments with Kevasiya
        </p>

        {/* CTA Button */}
        <button
          className="group relative overflow-hidden rounded-full bg-[#BEA88A] px-12 animate-bounce py-3 pb-4 text-base text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-[#d7bf9d] focus:outline-none focus:ring-2 focus:ring-[#D4C4A8] focus:ring-offset-2 sm:text-3xl font-bold"
          onClick={() => console.log("Buy Now clicked")}
        >
          Buy Now
        </button>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Optional Loading State */}
      <div className="sr-only" role="status">
        <span>Loading luxury gift collection...</span>
      </div>
    </div>
  );
}
