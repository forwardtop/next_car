// components/QwikioPower.tsx
import React from 'react';
import { red1 } from "public/assets";
const QwikioPower: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-8">
      {/* 1/3 Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Ground Breaking Technology</h1>
        <h2 className="text-2xl font-semibold mb-2">Q-KERS Technology: Powering the Future</h2>
        <p className="text-lg text-gray-600 mb-4">Our proprietary Q-KERS technology is a game-changer in the EV space. It's not just about driving; it's about generating power on the go. This innovation ensures that our vehicles go the distance, redefining what you expect from electric mobility.</p>
        {/* <button className="text-xl border-solid border-1 border-gray-900 p-1 w-48 rounded-sm hover:bg-black duration-500 hover:text-white">Learn More</button> */}
      </div>

      {/* 2/3 Section */}
      <div className="w-full lg:w-2/3 relative overflow-hidden">
        <div
          className="h-full bg-cover transition-transform transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url(${red1.src})` }}
        />
      </div>
    </div>
  );
};

export default QwikioPower;
