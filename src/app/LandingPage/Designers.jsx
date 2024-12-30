import React from "react";

export default function Designers() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 justify-center sm:justify-normal text-center sm:text-left items-center">
          {/* Image Section */}
          <div className="w-full aspect-square bg-[#F5F5F5]">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNFNUU1RTUiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0U1RTVFNSIvPjwvc3ZnPg==')] bg-[length:20px_20px]"></div>
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
