import React, { useState } from "react";
import ArrowUp from "../../assets/ArrowUp.svg";
import img1 from "../../assets/3.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/4.png";
import img4 from "../../assets/1.png";

const IMAGES = [
  {
    thumbnails: [
      img1,
      img2,
      img3,
      "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    ],
  },
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES[0].thumbnails.length);
    setStartIndex((prev) => 
      currentIndex >= prev + 2 ? prev + 1 : prev
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? IMAGES[0].thumbnails.length - 1 : prev - 1
    );
    setStartIndex((prev) => 
      currentIndex <= prev ? Math.max(0, prev - 1) : prev
    );
  };

  const visibleThumbnails = IMAGES[0].thumbnails.slice(startIndex, startIndex + 3);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 sm:gap-0 items-center">
        {/* Left Content Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Celebrate Life's
              <br />
              Special Moments with
              <span className="block font-bold mt-3 text-[2.5em]">
                Kevasiya
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-light">Exquisite Gifts.</p>
            <p className="text-xl text-gray-700 font-light">
              Impeccable Craftsmanship.
            </p>
            <p className="text-xl text-gray-700 font-light">
              Unforgettable Memories
            </p>
          </div>
        </div>

        {/* Right Image Carousel Section */}
        <div className="grid grid-cols-4 gap-6">
          {/* Main large square */}
          <div className="col-span-3 relative aspect-square bg-white shadow-lg overflow-hidden">
            <img
              src={IMAGES[0].thumbnails[currentIndex]}
              alt="Product showcase"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Thumbnails with navigation */}
          <div className="relative flex flex-col gap-6">
            {/* Top navigation button */}
            <button
              onClick={previousSlide}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#DADADA] backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-[#DADADA]/90 transition-all duration-300 hover:shadow-xl"
              aria-label="Previous image"
            >
              <img
                src={ArrowUp}
                alt="Arrow Up"
                className="w-5 h-5 rotate-180"
              />
            </button>

            {/* Square Thumbnails */}
            <div className="grid grid-rows-3 gap-6 h-full">
              {visibleThumbnails.map((src, index) => {
                const actualIndex = startIndex + index;
                return (
                  <button
                    key={actualIndex}
                    className={`
                      relative aspect-square overflow-hidden transition-all duration-500
                      ${
                        currentIndex === actualIndex
                          ? ""
                          : "opacity-50 hover:opacity-100 shadow-md hover:shadow-lg"
                      }
                    `}
                    onClick={() => setCurrentIndex(actualIndex)}
                  >
                    <img
                      src={src}
                      alt={`Product view ${actualIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Bottom navigation button */}
            <button
              onClick={nextSlide}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#DADADA] backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-[#DADADA]/90 transition-all duration-300 hover:shadow-xl"
              aria-label="Next image"
            >
              <img src={ArrowUp} alt="Arrow Down" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
