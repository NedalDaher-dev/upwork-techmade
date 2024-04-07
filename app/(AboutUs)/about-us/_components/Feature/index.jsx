import React from 'react';
import { features } from './constants';
import './index.styles.scss';

const Features = () => (
  <div className="about-us-features-wrapper">
    <div className="about-us-features-container">
      {features.map((item) => (
        <div key={item.title} className="feature-card-container">
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
