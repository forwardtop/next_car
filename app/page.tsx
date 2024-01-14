"use client";
import styles from "@/styles/style";
import {
  Navbar,
  // Hero,
  // Stats,
  // Business,
  // Billing,
  // CardDeal,
  // CTA,
  Footer,
  HeroImageSlider,
  BootstrapCarousel,
  HeroVideo,
} from "@/components";
const Home: React.FC = () => {
  return (
    <>
      <div className=" w-full ">
        <div className="">
          <div className="w-full">
            <Navbar />
          </div>
          <div>
            <BootstrapCarousel />
          </div>
          <div className="text-center mt-8 mb-5">
            <h1>Explore all the QWIKIO models</h1>
          </div>
          <div className="flex justify-center">
            <HeroImageSlider />
          </div>
          <div className="flex justify-center mt-4">
              <button className="text-xl border-solid border-1 border-gray-900 p-1 w-48 rounded-sm hover:bg-black duration-500 hover:text-white">Explore More</button>
          </div>
          <div>
            <HeroVideo />
          </div>
          <div className="bg-gray-100">
            <h2 className="text-center text-4xl">Discover the world of QWIKIO</h2>
          </div>
        </div>
        <div className={`bg-gray-500 ${styles.paddingX} ${styles.flexStart} mt-5`}>
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
