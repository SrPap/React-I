import React from 'react';
import styles from './NavButton.module.css';

interface NavButtonProps {
  title: string;
  link: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, link }) => {
  return (
    <a className={styles.navA} href={link}>
      {title}
    </a>
  );
}

export default NavButton;
