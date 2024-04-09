import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/assets/Icons/Logo'; // تأكد من صحة المسار
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من صحة المسار
import NavLinks from '@/components/Navbar/NavLinks'; // تأكد من صحة المسار
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname, useRouter } from 'next/navigation';

import './index.styles.scss'; // تأكد من صحة المسار
import '@/styles/index.scss';
import '@/styles/responsive.scss';

const Navbar = ({ type }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const router = useRouter();
  const path = usePathname();

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

  const handleNavClick = (e, url) => {
    e.preventDefault();
    const currentPath = path;
    const isAboutUsPage = currentPath === '/about-us';
    const hasHash = url.includes('#');
  
    if (isAboutUsPage && hasHash) {
      window.location.hash = url.split('#')[1];
    } else if (!isAboutUsPage && hasHash) {
      router.push(`/about-us${url}`);
    } else if (!isAboutUsPage) {
      router.push(`/about-us`);
    }
  };
  
  const menuButtonText = isMenuOpen ? 'Close' : 'Menu';

  return (
    <motion.div
      className={`${theme === 'light' ? 'bgLight' : 'bgDark'} navWrapper`}
      initial="initial"
      animate="scrolled"
      style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 100 }}
    >
      <nav className="nav container-nav">
        <div className="logo-wrapper" >
          {tabletScreenWidth >= screenWidth ? (
            <p className="logo-text">TM</p>
          ) : (
            <Logo theme={theme} />
          )}
        </div>
        {phoneScreenWidth < screenWidth && <NavLinks type={type} onClick={handleNavClick} />}
        <div className="buttonWrapper">
          {phoneScreenWidth >= screenWidth ? (
            <button type="button" className={`${theme === 'light' ? 'button-light ' : 'button-dark '}`} onClick={toggleMenu}>
              {menuButtonText}
            </button>
          ) : (
            <Link href="/contact-us" className={`${theme === 'light' ? 'button-light ' : 'button-dark '}`} >
              Contact Us
            </Link>
          )}
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
            <NavLinks type={type} onClick={handleNavClick}  />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
