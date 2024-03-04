'use client';

import React, { useEffect, useState } from 'react';
import './index.styles.scss';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

import { featuresRight, numbers } from './_constants';

const Achievements = () => {
  const roundedValues = numbers.map(() => useMotionValue(0));
  const roundedValuesTransformed = roundedValues.map((value) =>
    useTransform(value, (v) => Math.round(v))
  );

  useEffect(() => {
    const animations = roundedValues.map((value, idx) =>
      animate(value, numbers[idx].number, { duration: 2 })
    );

    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, []);

  return (
    <div className="about-us-achievements-wrapper">
      <div className="container">
        <div className="container-left">
          <h1>Bespoke solutions, from UI/UX finesse to mobile brilliance.</h1>
          <div className="stats-container">
            {numbers.map((item, idx) => (
              <div key={idx}>
                <motion.h2 whileInView="animate" className="stats-number">
                  {roundedValuesTransformed[idx]}
                </motion.h2>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-right">
          {featuresRight.map((item, idx) => (
            <div className="info-container" key={idx}>
              <h2>{item.title}</h2>
              <div>
                {item.list.map((subItem, subIdx) => (
                  <p key={subIdx}>{subItem.title}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
