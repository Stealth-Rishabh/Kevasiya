import React from "react";
import img1 from "../../assets/5.png";
import img2 from "../../assets/6.png";
import BG from "../../assets/WelcomeBg.png";

export default function WelcomeSection() {
  return (
    <section
      className="relative min-h-[400px] bg-center bg-no-repeat flex items-center bg-[#fdf8f5] px-4 py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundColor: "rgba(89, 62, 42, 0.9)",
        backgroundBlend: "overlay",
      }}
    >
      {/* Decorative Images */}
      <div className="absolute left-4 bottom-12 md:left-16 md:bottom-16 w-24 md:w-40 opacity-30 sm:opacity-100">
        <img src={img1} alt="" className="w-full h-auto" aria-hidden="true" />
      </div>
      <div className="absolute right-4 top-0 md:right-16 md:top-16 w-24 md:w-40 opacity-30 sm:opacity-100">
        <img src={img2} alt="" className="w-full h-auto" aria-hidden="true" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl welcome-title md:text-4xl font-serif mb-6 text-gray-800">
          Welcome to Kevasiya,
        </h2>

        <h2 className="text-xl md:text-3xl font-medium mb-8 text-gray-900 leading-tight">
          where luxury meets thoughtfulness in the art of gifting.
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At Kevasiya, we believe that every gift should embody elegance,
          exclusivity, and the heartfelt sentiment of the giver. Our curated
          collections of premium, bespoke, and handpicked treasures are designed
          to leave a lasting impression, transforming ordinary moments into
          extraordinary memories.
        </p>
      </div>
    </section>
  );
}
