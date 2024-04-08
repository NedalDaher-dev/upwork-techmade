import React from 'react';
import { navLinks } from '@/data/NavlinksData';
import { useTheme } from '@/contexts/ThemeContext';
import iconMapping from '@/data/IconsNavBar';
import Link from 'next/link';
import '../index.styles.scss';
import '@/styles/responsive.scss';

const NavLinks = ({ type }) => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const ActiveDiv = () => { }

  return (
    <div className="nav-links">
      {navLinks.map((item) => {
        const IconComponent = iconMapping[item.title];

        if (phoneScreenWidth >= screenWidth) {
          return (
            <div
              onClick={ActiveDiv}
              className="nav-link-item"
              key={item.title}
            >
              <Link href={item.url} className="nav_text">
                {item.title}
              </Link>
              {IconComponent && <IconComponent className="nav-icon" style={{ color: type === 'dark' ? 'white' : 'black' }} />}
              <div className='hover_effect_box' />
            </div>
          );
        }
        
        return (
          <Link
            href={item.url}
            className={`cursor  ${theme === 'light' ? 'effectTextNavBar-light' : 'effectTextNavBar-dark'}`}
            key={item.title}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
