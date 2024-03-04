import React from 'react';
import './index.styles.scss';

import { featuresRight, numbers } from './_constants';

const Achievements = () => (
  <div className="about-us-achievements-wrapper">
    <div className="container">
      <div className="container-left">
        <h1>Bespoke solutions, from UI/UX finesse to mobile brilliance.</h1>
        <div className="stats-container">
          {numbers.map((item, idx) => (
            <div key={idx}>
              <h2 className="stats-number">{item.number}+</h2>
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

export default Achievements;
