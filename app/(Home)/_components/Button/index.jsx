import ArrowYellow from '@/assets/Icons/ArrowYellow';
import React from 'react';
import './index.style.scss';
import useCalendlyPopup from '@/hooks/useCalendlyPopup';
// Add a className prop to the Button component
const Button = ({ text, className, onClick }) => {
   const handleCalendlyPopup = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');
  
   return (  
    <div onClick={handleCalendlyPopup} className={` ${className} button__container`}> {/* Use the className prop */}
      <button type="button">{text}</button>
      <ArrowYellow className="arrow-icon-button" />
    </div>
  )
}

export default Button;
