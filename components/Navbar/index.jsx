import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/assets/Icons/Logo'; // تأكد من صحة المسار
import Arrow from '@/assets/Icons/Arrow';
import NavLinks from '@/components/Navbar/NavLinks'; // تأكد من صحة المسار
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname, useRouter } from 'next/navigation';
import './index.styles.scss'; // تأكد من صحة المسار
import '@/styles/index.scss';
import '@/styles/responsive.scss';

const Navbar = ({ type }) => {
  const [scrollY, setScrollY] = useState(0);
  const [addClass, setAddClass] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setAddClass(scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

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

    if (hasHash) {
      // لاستخدام معالجة العنوان المرساة (hash) للقفز إلى القسم المحدد
      if (isAboutUsPage) {
        window.location.hash = url.split('#')[1];
      } else {
        // إذا كان العنوان المرساة يخص صفحة 'about-us' ولكننا لسنا عليها حاليًا
        router.push(`/about-us${url}`);
      }
    } else {
      // التوجيه إلى الـ URL المقدم مباشرةً
      router.push(url);
    }
  };



  const menuButtonText = isMenuOpen ? 'Close' : 'MENU';

  return (
    <motion.div
      className={`${theme === 'light' ? 'bgLight' : 'bgDark'} navWrapper ${addClass ? 'scrolled' : ''}`}
      initial="initial"
      animate="scrolled"
      style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 100 }}
    >
      <nav className="nav container-nav">
        <div className="logo-wrapper" >
          {tabletScreenWidth >= screenWidth ? (
            <p className="logo-text" style={{ color: theme === 'light' ? 'black' : 'white' }}>TM</p>
          ) : (
            <Logo theme={theme} />
          )}
        </div>
        {phoneScreenWidth <= screenWidth && <NavLinks type={type} onClick={handleNavClick} />}
        <div className="buttonWrapper">
          {phoneScreenWidth >= screenWidth ? (
            <button type="button" className={`${theme === 'light' ? 'button-light ' : 'button-dark '}`} onClick={toggleMenu}>
              {menuButtonText}
            </button>
          ) : (
            <Link href="/contact-us" className={`${theme === 'light' ? 'button-light ' : 'button-dark '}`} >
              CONTACT
            </Link>
          )}
          <span className='arrow-icon-warpper'>
            <Arrow className='arrow-icon arrow-icon-main' />
            <Arrow className='arrow-icon special-icon' />
          </span>
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
            <NavLinks type={type} onClick={handleNavClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
