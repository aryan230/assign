import React from "react";

function Hero() {
  return (
    <div className="bg-white font-karla">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple Address Book Manager.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Add, delete, manage all your addresses with Realtime Updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
