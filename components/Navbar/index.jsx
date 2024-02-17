import React from 'react';
import Logo from '@/assets/Icons/Logo';
import ArrowYellow from '@/assets/Icons/ArrowYellow';
import styles from './index.module.scss';
import { navLinks } from './_constants';

const Navbar = ({ type }) => (
  <div
    className={
      type === 'dark' ? styles.bgDark : `${styles.bgLight} ${styles.navWrapper}`
    }
  >
    <nav className={styles.nav}>
      <div>
        <Logo />
      </div>
      <div className={`${styles['nav-links']} ${styles.navLinks}`}>
        {navLinks.map((item) => (
          <p
            style={{ color: type === 'dark' ? 'white' : 'black' }}
            key={item.title}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button}>
          Contact us
        </button>
        <ArrowYellow />
      </div>
    </nav>
  </div>
);

export default Navbar;
