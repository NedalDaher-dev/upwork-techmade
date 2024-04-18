import React, { useEffect } from 'react';
import Logo from '@/assets/Icons/Logo'; // تأكد من صحة المسار
import Link from 'next/link';
import { navLinks } from '@/data/NavlinksData';
import { footerLinksIcon } from '@/data/IconFooter';
import Instagram from '@/assets/Icons/Social Media/Instagram'; // تأكد من صحة المسار
import useCalendlyPopup from '@/hooks/useCalendlyPopup'; // استيراد الهوك من ملفه
import ArrowYellow from '@/assets/Icons/ArrowYellow';
import TextSplitterComponent from '@/hooks/text/TextFill';
import { useTheme } from '@/contexts/ThemeContext';
import './index.styles.scss';

const Footer = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const isPhoneScreen = screenWidth <= 767;
  const isTabletScreen = screenWidth > 767 && screenWidth <= tabletScreenWidth;
  console.log(isTabletScreen);
  const handleScheduleClick = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');


  return (
    <>
      {
        isPhoneScreen ? (
          <section className="footer-wrapper">
            <div className='footer-container'>
              <TextSplitterComponent tagType='h2' wordsPerLineArray={[4, 4, 2]} >
                Embark on an exhilarating journey beyond your limits with us!

              </TextSplitterComponent>

              <div className='buttonWrapper'>
                <button type="button" className='button' onClick={handleScheduleClick}>
                  Start your project
                </button>
                <ArrowYellow />
              </div>
            </div>
            <div className="footer-bottom-container">
              <div className="footer-nav">
                <div className='footer-logo'>
                  <p>TM </p>
                  <span>©2024</span>
                </div>
                <div className="social-icons">
                  {Object.entries(footerLinksIcon).map(([key, Icon]) => (
                    <div className="social-icon-wrapper" key={key}>
                      <Icon className='social-icon' />
                    </div>
                  ))}
                </div>
              </div>
              {/* إلغاء التعليق عن السطر التالي إذا لزم الأمر
            <p className="copyright">
              © 2024 Techmade. All rights reserved.
            </p> */}
            </div>
          </section>

        ) : (
          <section className="footer-wrapper">
            <div className='footer-container'>
              <TextSplitterComponent tagType='h2' wordsPerLineArray={[4, 3, 3]} >
                Embark on an exhilarating journey beyond your limits with us!

              </TextSplitterComponent>

              <div className='buttonWrapper'>
                <button type="button" className='button' onClick={handleScheduleClick}>
                  Schedule a call
                </button>
                <ArrowYellow />
              </div>
            </div>
          </section>
        )
      }
      {
        isPhoneScreen ? (
          null
        ) : (
          <section className="footer-bottom">
            <div className="footer-bottom-container">
              <div className="footer-nav">
                <Logo />
                <div className='footer-nav-item'>
                  {navLinks.map((item) => (
                    <Link className='' href={item.url} key={item.title}>
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="social-icons">
                  {Object.entries(footerLinksIcon).map(([key, Icon]) => (
                    <div key={key}>
                      <Icon className='social-icon' />
                    </div>
                  ))}
                </div>
              </div>
              {/* إلغاء التعليق عن السطر التالي إذا لزم الأمر
            <p className="copyright">
              © 2024 Techmade. All rights reserved.
            </p> */}
            </div>
            <div className='copyright'>
              <p>© Copyright 2024, All Rights Reserved by TechMade</p>
            </div>
          </section>
        )
      }

    </>
  );
};

export default Footer;
