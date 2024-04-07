import React from 'react';
import { motion } from 'framer-motion';
import ArrowStraight from '@/assets/Icons/ArrowStraight';
import './index.styles.scss';

const Buttun = ({ children, description }) => (
  <div className="button-container">
    <div className='button-wrapper'>
      <button type="button" className="button"> {/* Added type attribute and removed braces */}
        {children}
      </button>
      <div className="arrow-circle">
        <ArrowStraight className="arrow" color="white" /> {/* Removed unnecessary curly braces and replaced double quotes with single */}
      </div>
    </div>
    <div className="text">
      <p>{description}</p>
    </div>
  </div>
);

export default Buttun;
