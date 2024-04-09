import React, { useEffect } from 'react';
import '@/styles/index.scss';
import './index.styles.scss';
import Logo from '@/assets/Icons/Logo'; // تأكد من صحة المسار
import Link from 'next/link';
import { navLinks } from '@/data/NavlinksData';
import { footerLinksIcon } from '@/data/IconFooter';
import Instagram from '@/assets/Icons/Social Media/Instagram'; // تأكد من صحة المسار

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    const adjustZIndex = () => {
      const calendlyPopup = document.querySelector('.calendly-popup-content');
      if (calendlyPopup) {
        calendlyPopup.style.zIndex = '9999';
        createCloseButton(calendlyPopup); // إضافة زر الإغلاق هنا
      }
    };

    const createCloseButton = (popup) => {
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.onclick = () => popup.style.display = 'none';

      popup.appendChild(closeButton);
    };

    script.onload = () => {
      adjustZIndex();
      script.addEventListener('Calendly.event_scheduled', adjustZIndex);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScheduleClick = () => {
    document.querySelector('.footer-wrapper').style.zIndex = 0;
    document.querySelector('.footer-bottom').style.zIndex = 0;
    Calendly.initPopupWidget({ url: 'https://calendly.com/umer-techmade/chat-with-umer-techmade' });
    return false;
  };

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
