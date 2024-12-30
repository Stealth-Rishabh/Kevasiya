import React from 'react';
import img1 from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.png";
import img4 from "../../assets/10.png";
import img5 from "../../assets/11.png";

const LuxuryGifts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-48">
        Discover Our Luxury Gifting Collections
      </h1>

      {/* Hero Section */}
      <div className="bg-[#E6F6FF] rounded-none mb-8 sm:mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
          <div className="w-full md:w-[43%] text-center sm:text-left">
            <div className="relative">
              <img
                src={img1}
                alt="Luxury baby gift box"
                className="sm:max-w-[400px] sm:h-auto sm:absolute -bottom-[135px] -left-[47px]"
              />
            </div>
          </div>
          <div className="w-full md:w-[57%] text-center sm:text-left space-y-6 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0080BC]">
              Baby Shower /Announcements
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome a little bundle of joy with Kevasiya's baby announcement luxury gifting. 
              Our exclusive collection of elegant and personalized gifts is designed to celebrate 
              this special milestone with unmatched sophistication.
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8">
        <div className="overflow-hidden shadow-md">
          <img
            src={img2}
            alt="Pink luxury gift set"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden shadow-md">
          <img
            src={img3}
            alt="Blue decorative gift box"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden shadow-md">
          <img
            src={img4}
            alt="Pink carousel themed gift"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden shadow-md">
          <img
            src={img5}
            alt="Blue themed gift box"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default LuxuryGifts;

