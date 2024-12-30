import React from "react";
import video from "../../assets/video.mp4";

export default function Designers() {
  return (
    <div className="bg-white flex items-center justify-center px-4 pb-12 pt-5 md:pb-20 md:pt-7 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 justify-center sm:justify-normal text-center sm:text-left items-center">
          {/* Image Section */}
          <div className="max-w-[488px] max-h-[488px] bg-black  h-full overflow-hidden rounded-sm">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-sm"
            ></video>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:text-left">
              Work with our
              <br />
              designers to create
            </h2>

            <div className="space-y-1">
              <p className="text-gray-500 inline-block sm:block text-xl">
                one-of-a-kind
              </p>
              <p className="text-gray-500 inline-block sm:block text-xl">
                luxury gifts tailored
              </p>
              <p className="text-gray-500 inline-block sm:block text-xl">
                to your needs
              </p>
            </div>

            <button
              className="mt-8 px-10 py-4 bg-[#BEA88A] text-white rounded-full text-2xl sm:text-3xl font-bold 
                         hover:bg-[#d3bb99] transition-colors duration-200 ease-in-out"
            >
              Start Customizing Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
