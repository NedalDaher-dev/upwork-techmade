import React from 'react';
import './index.styles.scss';
import Rocket from '@/assets/Icons/Rocket';
import Brush from '@/assets/Icons/Brush';
import Code from '@/assets/Icons/Code';

const Hero = () => (
  <div className="about-us-hero-container">
    <h1 className="heading">
      TECH MADE, <span>Where Internet</span> Expertise Meets User{' '}
      <span>Understanding</span>
    </h1>
    <p className="description">
      At Tech Made, we uniquely fuse profound internet insights with an innate
      understanding of people. As avid online participants, we decode what
      captivates users — crafting strategies that resonate. Elevate your digital
      presence with our tailored approach, ensuring engagement and sustained
      success in the dynamic online realm.
    </p>
    <div className="rocket-icon-container">
      <Rocket />
    </div>
    <div className="brush-icon-container">
      <Brush />
    </div>
    <div className="code-icon-container">
      <Code />
    </div>
  </div>
);

export default Hero;
