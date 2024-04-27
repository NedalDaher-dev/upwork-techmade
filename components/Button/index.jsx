import React from 'react';
import useCalendlyPopup from '@/hooks/useCalendlyPopup';
import Arrow from '@/assets/Icons/Arrow';
import './index.styles.scss';
// Add a className prop to the Button component
const Button = ({ text, className }) => {
  const handleCalendlyPopup = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');

  return (
    <div onClick={handleCalendlyPopup} className={` ${className} button__container`}> {/* Use the className prop */}
      <button type="button">
        {text}
        <span className="arrow-icon-button">
          <Arrow />
        </span>
      </button>
    </div>
  )
}

export default Button;
