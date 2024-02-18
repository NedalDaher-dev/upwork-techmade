import ArrowYellow from '@/assets/Icons/ArrowYellow';
import React from 'react';

import './index.style.scss';

const Button = ({ text }) => (
  <div className="button__container">
    <button type="button">{text}</button>
    <ArrowYellow />
  </div>
);

export default Button;
