import { motion } from 'framer-motion';

const WeAreQwikio: React.FC = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Welcome to Qwikio Inc.</h1>
            <p>Innovating for Tomorrow's Mobility</p>

            <p>
                At Qwikio Inc., we stand at the forefront of electric vehicle (EV) technology.
                Our mission is to revolutionize the way the world moves, using groundbreaking technology
                to make sustainable transportation not just a choice, but a way of life.
            </p>

            <h2>Q-KERS Technology: Powering the Future</h2>
            <p>
                Our proprietary Q-KERS technology is a game-changer in the EV space. It's not just about
                driving; it's about generating power on the go. This innovation ensures that our vehicles
                go the distance, redefining what you expect from electric mobility.
            </p>

            <h2>Sustainable Solutions for a Connected World</h2>
            <p>
                Our vision extends to creating a connected, sustainable world. Our initiatives include
                integrating EVs with smart mini-grid systems and offering energy solutions like Home Powerplus
                and the Solar Roof. These advancements are steps towards an ecosystem where transportation and
                energy sustainability go hand in hand.
            </p>

            <h2>Redefining Urban Commuting</h2>
            <p>
                The Riida Series, MetroFlux and Triida Series models, our flagship vehicles, embody luxury,
                efficiency, and a commitment to eco-friendly technology. They are designed to elevate the urban
                commuting experience while leaving a minimal environmental footprint.
            </p>

            <h2>Our Team: Driving Innovation Forward</h2>
            <p>
                Qwikio's success is fueled by a diverse team of experts in technology, sustainability, and business.
                Their visionary approach keeps us at the cutting edge of the EV industry.
            </p>

            <h2>Get in Touch</h2>
            <p>
                Discover more about our technology and our vision for sustainable mobility.
                Reach out to us at:
            </p>
            <ul>
                <li>Email: info@qwikio.com</li>
                <li>Phone: +1 773-530-3799</li>
            </ul>

            <p>Join us in shaping the future of transportation. Explore Qwikio Inc. - where innovation meets sustainability.</p>
        </motion.div>
    );
};

export default WeAreQwikio;
