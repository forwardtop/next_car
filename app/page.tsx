"use client";
import styles from "styles/style";
import "styles/globals.css";
import {
  Navbar,
  Footer,
  HeroImageSlider,
  BootstrapCarousel,
  HeroVideo,
  ImageGallery,
  QwikioPower,
} from "components";

const Home: React.FC = () => {
  return (
    <>
      <div className=" w-full bg-gray-100">
        <div className="">
          <div className="w-full">
            <Navbar />
          </div>
          <div>
            <BootstrapCarousel />
          </div>
          <div className="text-center mt-8 mb-5">
            <h1 className="mb-4 animate-fade-up animate-duration-1000 animate-delay-500">
              Forward thinking Design and Technology
            </h1>
          </div>
          <div className="flex justify-center">
            <HeroImageSlider />
          </div>
          {/* <div className="flex justify-center mt-4 animate-fade-up animate-once animate-ease-linear">
            <button className="text-xl border-solid border-1 border-gray-900 p-1 w-48 rounded-sm hover:bg-black duration-500 hover:text-white">
              Explore More
            </button>
          </div> */}
          <div className="max-w-full lg:max-w-[90%] m-auto">
            <div className="mt-12">
              <HeroVideo />
            </div>
            <div className="mt-24">
              <h2 className="text-4xl font-bold mb-4 text-center">
                Discover the world of QWIKIO
              </h2>
              <ImageGallery />
            </div>
            <div className="">
              <QwikioPower />
            </div>
          </div>
        </div>
        <div
          className={`bg-gray-500 ${styles.paddingX} ${styles.flexStart} mt-5`}
        >
          <div className={`${styles.boxWidth}`}>
            {/* <Hero />
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <CTA /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
