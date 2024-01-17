"use client";
import { useState, useEffect } from 'react';

const HeroVideo: React.FC = () => {
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
      const handleScroll = () => {
        if (typeof window !== 'undefined') {
          const scrollPosition = window.scrollY;
          const newFontSize = Math.max(40, 16 - scrollPosition / 1000); // Adjust the formula as needed
  
          setFontSize(newFontSize);
        }
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
      }

    }, [setFontSize]);

  return (
    <section className="bg-gray-100">
      <div className="flex justify-center mt-8">
        <video autoPlay loop muted className="mt-20">
          {/* Replace 'your-video-source.mp4' with the actual video source */}
          <source src={"/assets/herovideo.mp4"} type="video/mp4" />
        </video>
        <div className="overlay flex flex-col">
            <h2 className="text-white font-bold" style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.3s ease' }}>Blue Sky Coming</h2>
            <h3 className="text-white text-5xl text-center font-thin">We believe in a brighter, positive future <br/> and a more sustainable tomorrow.</h3>
            <div className="flex justify-center mt-4">
              <button className="hover:!text-black duration-500 text-lg font-thin border-solid border-1 border-white p-1 w-48 rounded-sm text-white hover:bg-white">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
