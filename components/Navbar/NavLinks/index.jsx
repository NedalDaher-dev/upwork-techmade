// NavLinks component
import React from 'react';
import { navLinks } from '@/data/NavlinksData';
import { useTheme } from '@/contexts/ThemeContext';
import iconMapping from '@/data/IconsNavBar'; // استيراد خريطة الأيقونات
import Link from 'next/link'
import '../index.styles.scss'
const NavLinks = ({ type }) => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const ActiveDiv = () => {
    
  }
  return (
    <div className="nav-links">
      {
        navLinks.map((item) => {
          const IconComponent = iconMapping[item.title]; // استخدام خريطة الأيقونات
          if (phoneScreenWidth >= screenWidth) {
            // منطق لشاشة الهاتف
            return (
              <div
              onClick={ActiveDiv}
              className="nav-link-item"
              key={item.title}
          >
              <Link href={item.url} className="nav_text" >
                  {item.title}
              </Link>
              {IconComponent && (
                  <IconComponent className="nav-icon"  style={{ color: type === 'dark' ? 'white' : 'black' }} />
              )}
              <div className='hover_effect_box'></div>
          </div>
      
            );
          } else {
            // منطق للشاشات الأخرى
            return (
              <Link
                href={item.url}
                className="cursor effectTextNavBar"
                style={{ color: type === 'dark' ? 'white' : 'black' }}
                key={item.title}
              >
                {item.title}
              </Link>
            );
          }
        })
      }
    </div>
  );
};

export default NavLinks;
