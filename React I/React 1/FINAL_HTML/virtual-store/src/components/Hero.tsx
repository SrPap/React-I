import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <span className={styles.heroSpan}>Tecnología</span>
        <span className={styles.heroSpan}>Renovada</span>
      </div>
    </div>
  );
}

export default Hero;
