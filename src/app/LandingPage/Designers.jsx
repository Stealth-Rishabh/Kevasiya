import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/video.mp4";

export default function Designers() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.src = video;
        videoRef.current.load();
        videoRef.current.play();
      } else {
        videoRef.current.src = "";
      }
    }
  }, [isVisible]);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center px-4 pb-12 pt-5 md:pb-20 md:pt-7 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 justify-center sm:justify-normal text-center sm:text-left items-center">
          {/* Image Section */}
          <div
            ref={containerRef}
            className="max-w-[488px] max-h-[488px] bg-black h-full overflow-hidden rounded-sm relative"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-contain rounded-sm"
            ></video>
            <button
              onClick={handleToggleMute}
              className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? (
                <div className="w-9 h-9 flex items-center justify-center bg-[#BEA88A] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-volume-off"
                >
                  <path d="M16 9a5 5 0 0 1 .95 2.293" />
                  <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
                  <path d="m2 2 20 20" />
                  <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
                  <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
                  </svg>
                </div>
              ) : (
                <div className="w-9 h-9 bg-[#BEA88A] flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-volume-2"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <path d="M16 9a5 5 0 0 1 0 6" />
                  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                  </svg>
                </div>
              )}
            </button>
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
