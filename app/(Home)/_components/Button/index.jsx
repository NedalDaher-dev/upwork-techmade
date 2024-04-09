import ArrowYellow from '@/assets/Icons/ArrowYellow';
import React from 'react';
import './index.style.scss';

// Add a className prop to the Button component
const Button = ({ text, className }) => (
  <div className={` ${className} button__container`}> {/* Use the className prop */}
    <button type="button">{text}</button>
    <ArrowYellow />
  </div>
);

export default Button;
