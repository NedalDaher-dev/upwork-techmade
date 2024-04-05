"use client"
import { useEffect, useState } from 'react';
import Logo from '@/assets/Icons/Logo';
import ArrowYellow from '@/assets/Icons/ArrowYellow';
import './index.styles.scss';
import { navLinks } from './_constants';

const Navbar = ({ type }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.scrollY;
      console.log(newPosition); // الآن سيتم طباعة الموقع الجديد للسكرول
      setScrollY(newPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${type === 'dark' ? 'bgDark' : 'bgLight'} navWrapper ${ scrollY > 0 ? 'navEffect' : ''}`}>
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
};

export default Navbar;
