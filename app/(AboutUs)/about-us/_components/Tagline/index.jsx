import React from 'react';
import useCalendlyPopup from '@/hooks/useCalendlyPopup'; // استيراد الهوك من ملفه
import './index.styles.scss';
import ArrowPurple from '@/assets/Icons/ArrowPurple';
import '@/styles/index.scss'

const Tagline = () => {
  const handleScheduleClick = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');

  return (
    <div className="tagline-wrapper">
      <p>
        Elevating Your Presence with Unforgettable Online Experiences whether
        you&apos;re a <span>startup</span> or an <span>industry leader.</span>
      </p>
      <div className="buttonWrapper">
        <button type="button" onClick={handleScheduleClick} className="button">
          WORK WITH US
        </button>
        <ArrowPurple />
      </div>
    </div>
  )
};

export default Tagline;
