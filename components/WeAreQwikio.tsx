// components/WeAreQwikio.tsx
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const WeAreQwikio: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HeroSection />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="p-4"
      >
        <div className=" flex justify-center items-center">
          <div className="mt-12 lg:w-2/3 flex flex-col">
            <p className="mb-6 text-gray-500 text-center text-lg lg:text-3xl leading-relaxed">
              At Qwikio Inc., we stand at the forefront of electric vehicle (EV)
              technology. Our mission is to revolutionize the way the world
              moves, using groundbreaking technology to make sustainable
              transportation not just a choice, but a way of life.
            </p>
            <div className="lg:mt-24 flex justify-center">
              <h1 className="mt-8 text-2xl lg:text-6xl text-gray-500 font-bold mb-4 text-center">
                Sustainable Solutions for a Connected World
              </h1>
            </div>
            <div className="flex justify-center lg:mt-24">
              <img className="w-3/4" src="assets/images/logo.png" alt="Logo" />
            </div>
            <p className="mt-12 lg:text-3xl text-gray-500 text-center leading-relaxed">
              Our vision extends to creating a connected, sustainable world. Our
              initiatives include integrating EVs with smart mini-grid systems
              and offering energy solutions like Home Powerplus and the Solar
              Roof. These advancements are steps towards an ecosystem where
              transportation and energy sustainability go hand in hand.
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="mt-12 lg:w-2/3 flex flex-col">
            <h2 className="text-2xl lg:text-6xl font-bold mb-4 text-center text-gray-500">
              Q-KERS Technology: Powering the Future
            </h2>
            <p className="mb-6 text-center text-gray-500 lg:text-3xl leading-relaxed">
              Our proprietary Q-KERS technology is a game-changer in the EV
              space. It's not just about driving; it's about generating power on
              the go. This innovation ensures that our vehicles go the distance,
              redefining what you expect from electric mobility.
            </p>
          </div>
        </div>

        {/* Add styling for other sections similarly */}
        {/* ... */}
        <div className=" flex justify-center items-center ">
          <div className="mt-12 lg:w-2/3 flex flex-col text-center justify-center items-center">
            <h2 className="text-3xl lg:text-6xl text-gray-500 font-bold mb-4">Get in Touch</h2>
            <p className="mb-4 text-lg lg:text-4xl text-gray-500 lg:w-1/2">
              Discover more about our technology and our vision for sustainable
              mobility. Reach out to us at:
            </p>
            <ul className="mb-4 lg:text-3xl text-gray-500">
              <li>Email: info@qwikio.com</li>
              <li>Phone: +1 773-530-3799</li>
            </ul>

            <p className="lg:text-3xl text-gray-500">
              Join us in shaping the future of transportation. Explore Qwikio
              Inc.<br /> where innovation meets sustainability.
            </p>
          </div>
        </div>
        <div className="bg-gray-500 sm:px-16 text- px-6 flex justify-center items-start mt-5">
          <div className="xl:max-w-[1280px] w-full">
          <Footer />

          </div>


        </div>
      </motion.div>
    </>
  );
};

export default WeAreQwikio;
