import React, { useEffect } from 'react';
import '@/styles/index.scss';
import './index.styles.scss';
import Logo from '@/assets/Icons/Logo'; // تأكد من صحة المسار
import Link from 'next/link';
import { navLinks } from '@/data/NavlinksData';
import { footerLinksIcon } from '@/data/IconFooter';
import Instagram from '@/assets/Icons/Social Media/Instagram'; // تأكد من صحة المسار
import useCalendlyPopup from '@/hooks/useCalendlyPopup'; // استيراد الهوك من ملفه

const Footer = () => {


  const handleScheduleClick = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');


  return (
    <div>
      <section className="footer-wrapper">
        <div className='footer-container'>
          <h2>
            Embark on an exhilarating journey beyond your limits with us!
          </h2>
          <div className='buttonWrapper'>
            <button type="button" className='button' onClick={handleScheduleClick}>
              Schedule a call
            </button>
          </div>
        </div>
      </section>
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
      </section>
    </div>
  );
};

export default Footer;
