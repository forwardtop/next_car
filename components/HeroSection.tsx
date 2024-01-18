// components/HeroSection.tsx

import React from 'react';
import styles from 'styles/HeroSection.module.css'; // Import your styles
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={`${styles.backgroundImage} flex flex-col justify-center items-center` }>
        {/* Overlay Text */}
        <div className="text-white text-center">
          {/* Logo Image */}
          <Link href="/" className='hidden lg:flex justify-center'>
            <img className="mb-5 w-1/3" src="assets/images/logo.png" alt="Logo" />
          </Link>
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl">Welcome to Qwikio Inc.</h1>
          <p className='text-xl mt-6'>Innovating for Tomorrow's Mobility</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
