import React from 'react';
import Logo from '@/assets/Icons/Logo';
import ArrowYellow from '@/assets/Icons/ArrowYellow';
import './index.styles.scss'; // Assuming you have a regular CSS file for styles
import { navLinks } from './_constants';

const Navbar = ({ type }) => (
  <div className={type === 'dark' ? 'bgDark' : 'bgLight navWrapper'}>
    <nav className="nav">
      <div>
        <Logo />
      </div>
      <div className="nav-links">
        {navLinks.map((item) => (
          <p
            style={{ color: type === 'dark' ? 'white' : 'black' }}
            key={item.title}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="buttonWrapper">
        <button type="button" className="button">
          Contact us
        </button>
        <ArrowYellow />
      </div>
    </nav>
  </div>
);

export default Navbar;
