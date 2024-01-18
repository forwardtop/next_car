"use client";
import { hero } from "public/assets";
import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="relative">
        <video autoPlay loop muted className="w-full">
          {/* Replace 'your-video-source.mp4' with the actual video source */}
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="text-white lg:text-5xl text-lg font-thin">
            We believe in a brighter, positive future
            <br /> and a more sustainable tomorrow.
          </h3>
          <div className="flex justify-center mt-4">
            <button className="hover:!text-black duration-500 text-lg font-thin border-solid border-1 border-white p-1 w-48 rounded-sm text-white hover:bg-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
