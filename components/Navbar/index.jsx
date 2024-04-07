// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/assets/Icons/Logo'; // تأكد من أن المسار صحيح
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من أن المسار صحيح
import NavLinks from '@/components/Navbar/NavLinks'; // تأكد من أن المسار صحيح
import { useTheme } from '@/contexts/ThemeContext';
import './index.styles.scss'; // تأكد من أن المسار صحيح
import '@/styles/index.scss'
const Navbar = ({ type }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { stiffness: 100, duration: 0.5 }
    },
    closed: {
      opacity: 0,
      transition: { stiffness: 100 }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuButtonText = isMenuOpen ? 'close' : 'menu'; // تغيير نص الزر بناءً على حالة isMenuOpen

  return (
    <motion.div
      className={`${type === 'dark' ? 'bgDark' : 'bgLight'} navWrapper`}
      initial="initial"
      animate="scrolled"
      style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 100 }}
    >
      <nav className="nav container-nav">
        <div className="logo-wrapper">
          {phoneScreenWidth >= screenWidth ? (
            <p className="logo-text">TM</p>
          ) : (
            <Logo />
          )}
        </div>
        {phoneScreenWidth < screenWidth && <NavLinks type={type} />}
        <div className="buttonWrapper">
          <button type="button" className="button" onClick={toggleMenu}>
            {phoneScreenWidth >= screenWidth ? menuButtonText : 'Contact us'}
          </button>
          <ArrowYellow />
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && phoneScreenWidth >= screenWidth && (
          <motion.div
            className="menu-container"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavLinks type={type} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
