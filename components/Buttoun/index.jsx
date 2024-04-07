import React from 'react';
import { motion } from 'framer-motion';
import ArrowStraight from '@/assets/Icons/ArrowStraight';
import './index.styles.scss';

const Button = ({ children, description }) => {
  // Define parent animation variants
  return (
    <div className="button-container">
      <div className='button-wrapper' >
        <button className="button">
          {children}
        </button>
        <div className="arrow-circle" >
          <ArrowStraight className={"arrow"} color="white" />
        </div>
      </div>
      <div className="text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Button;
