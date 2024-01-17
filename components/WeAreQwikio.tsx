// components/WeAreQwikio.tsx
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

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
          <div className="mt-12 w-2/3 flex flex-col">
            <p className="mb-6 text-gray-500 text-center text-3xl leading-relaxed">
              At Qwikio Inc., we stand at the forefront of electric vehicle (EV)
              technology. Our mission is to revolutionize the way the world
              moves, using groundbreaking technology to make sustainable
              transportation not just a choice, but a way of life.
            </p>
            <div className="mt-24 flex justify-center">
              <h1 className="mt-8 text-6xl text-gray-500 font-bold mb-4 text-center">
                Sustainable Solutions for a Connected World
              </h1>
            </div>
            <div className="flex justify-center mt-24">
              <img className="w-3/4" src="assets/images/logo.png" alt="Logo" />
            </div>
            <p className="mt-12 text-xl text-gray-500 text-center">
              Our vision extends to creating a connected, sustainable world. Our
              initiatives include integrating EVs with smart mini-grid systems
              and offering energy solutions like Home Powerplus and the Solar
              Roof. These advancements are steps towards an ecosystem where
              transportation and energy sustainability go hand in hand.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Q-KERS Technology: Powering the Future
        </h2>
        <p className="mb-6">
          Our proprietary Q-KERS technology is a game-changer in the EV space.
          It's not just about driving; it's about generating power on the go.
          This innovation ensures that our vehicles go the distance, redefining
          what you expect from electric mobility.
        </p>

        {/* Add styling for other sections similarly */}
        {/* ... */}

        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Discover more about our technology and our vision for sustainable
          mobility. Reach out to us at:
        </p>
        <ul className="mb-4">
          <li>Email: info@qwikio.com</li>
          <li>Phone: +1 773-530-3799</li>
        </ul>

        <p>
          Join us in shaping the future of transportation. Explore Qwikio Inc. -
          where innovation meets sustainability.
        </p>
      </motion.div>
    </>
  );
};

export default WeAreQwikio;
