// components/WeAreQwikio.tsx
import { motion } from 'framer-motion';

const WeAreQwikio: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Qwikio Inc.</h1>
      <p className="mb-6">Innovating for Tomorrow's Mobility</p>

      <p className="mb-6">
        At Qwikio Inc., we stand at the forefront of electric vehicle (EV) technology. Our mission is to revolutionize the
        way the world moves, using groundbreaking technology to make sustainable transportation not just a choice, but a
        way of life.
      </p>

      <h2 className="text-2xl font-bold mb-4">Q-KERS Technology: Powering the Future</h2>
      <p className="mb-6">
        Our proprietary Q-KERS technology is a game-changer in the EV space. It's not just about driving; it's about
        generating power on the go. This innovation ensures that our vehicles go the distance, redefining what you
        expect from electric mobility.
      </p>

      {/* Add styling for other sections similarly */}
      {/* ... */}

      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">
        Discover more about our technology and our vision for sustainable mobility. Reach out to us at:
      </p>
      <ul className="mb-4">
        <li>Email: info@qwikio.com</li>
        <li>Phone: +1 773-530-3799</li>
      </ul>

      <p>Join us in shaping the future of transportation. Explore Qwikio Inc. - where innovation meets sustainability.</p>
    </motion.div>
  );
};

export default WeAreQwikio;
