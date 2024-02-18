import React from 'react';
import './index.styles.scss';
import { featuresRight, numbers } from './_constants';

const Achievements = () => (
  <div className="about-us-achievements-wrapper">
    <div className="container">
      <div className="container-left">
        <h1>Bespoke solutions, from UI/UX finesse to mobile brilliance.</h1>
        <div className="stats-container">
          {numbers.map((item) => (
            <div>
              <h2 className="stats-number">
                {item.number}
                {item.symbol}
              </h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container-right">
        {featuresRight.map((item) => (
          <div className="info-container">
            <h2>{item.title}</h2>
            <div>
              {item.list.map((subItem) => (
                <p>{subItem.title}</p>
              ))}{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Achievements;
