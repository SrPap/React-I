import NavButton from './NavButton';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavButton title="Home" link="#home" />
      <NavButton title="About" link="#about" />
      <NavButton title="Services" link="#services" />
      <NavButton title="Contact" link="#contact" />
    </nav>
  );
}

export default NavBar;
