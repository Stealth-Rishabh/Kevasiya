import React, { useState } from "react";
import ChevronLeft from "../../assets/ChevronLeft.svg";
import ChevronRight from "../../assets/ChevronRight.svg";
import img1 from "../../assets/12.png";
import img2 from "../../assets/14.png"; 
import img3 from "../../assets/13.png";


const slides = [
  {
    id: 1,
    image: img1,
    title: "Vintage Collections",
  },
  {
    id: 2,
    image: img2,
    title: "Exquisite Craftsmanship",
  },
  {
    id: 3,
    image: img3,
    title: "Luxury Gifts",
  },
];

export default function GiftingTrends() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-12 md:pt-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        This Month's Featured Gifting Trends
      </h2>

      <div className="relative overflow-hidden">
        <div className="relative w-full h-[230px] sm:h-[300px] md:h-[400px]">
          {/* Slider container */}
          <div className="flex items-center justify-center gap-4 md:gap-8 absolute w-full h-full">
            {slides.map((slide, index) => {
              // Calculate position relative to current slide
              let position = index - currentSlide;
              if (position < 0) position = slides.length + position;

              return (
                <div
                  key={slide.id}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${
                      position === 1
                        ? "z-20 scale-100 opacity-100"
                        : "z-10 scale-75"
                    }
                    ${position === 0 ? "-translate-x-1/2" : ""}
                    ${position === 2 ? "translate-x-1/2" : ""}
                    absolute w-full max-w-xl
                  `}
                >
                  <div className="relative aspect-video w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {position === 1 && (
                      <div className="absolute inset-0 rounded-lg">
                        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center">
                          <h2 className="text-white text-2xl md:text-4xl font-semibold text-center px-4">
                            {slide.title}
                          </h2>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <img src={ChevronLeft} alt="ChevronLeft" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
            aria-label="Next slide"
          >
            <img src={ChevronRight} alt="ChevronRight" className="w-6 h-6" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "w-4" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
