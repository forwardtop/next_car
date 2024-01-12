"use client";
import styles from "@/styles/style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  HeroImageSlider,
  BootstrapCarousel,
} from "@/components";
const Home: React.FC = () => {
  return (
    <>
      <div className=" w-full overflow-hidden">
        <div className="">
          <div className="w-full">
            <Navbar />
          </div>
          <div>
            <BootstrapCarousel />
          </div>
          <div className="flex justify-center">
            <HeroImageSlider />
          </div>
        </div>
        <div className="">
          <div className="">
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
