// components/HeroSection.tsx

import React from 'react';
import styles from '../styles/HeroSection.module.css'; // Import your styles
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        {/* Overlay Text */}
        <div className={styles.overlayText}>
          {/* Logo Image */}
          <Link href="/" className='flex justify-center'>
            <img className={styles.logo} src="assets/images/logo.png" alt="Logo" />
          </Link>
          {/* Title */}
          <h1 className={styles.title}>Welcome to Qwikio Inc.</h1>
          <p className='text-xl'>Innovating for Tomorrow's Mobility</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
