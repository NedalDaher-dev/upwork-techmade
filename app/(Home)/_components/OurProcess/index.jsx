import React from 'react';

import './index.style.scss';

import Image from 'next/image';
import ArrowWhite from '@/assets/Icons/LandingPage/ArrowWhite';
import { arr } from './constants';

const OurProcess = () => (
  <div className="ourProcess__container">
    <div className="ourProcess__cards">
      {arr.map((data, index) => (
        <div className="card__parent">
          <div key={data.title} className="card1">
            <Image src={data.image} alt="" className="card__image" />
            <div className="header">
              <div className="heading">{data.title}</div>
              <ArrowWhite className="cursor" />
            </div>
            <div className="card__info">{data.info}</div>
          </div>
          {/* {index === 0 || index === 1 || index === 3 || index === 4 ? (
            <div className="border" />
          ) : null} */}
        </div>
      ))}
    </div>
  </div>
);

export default OurProcess;
