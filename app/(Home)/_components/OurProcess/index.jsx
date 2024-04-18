import React from 'react';

import './index.style.scss';

import Image from 'next/image';
import ArrowWhite from '@/assets/Icons/LandingPage/ArrowWhite';
import { arr } from './constants';
import { useTheme } from '@/contexts/ThemeContext';

const OurProcess = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  const isPhoneScreen = screenWidth <= 767;
  const isTabletScreen = screenWidth > 767 && screenWidth <= tabletScreenWidth;
  console.log(isPhoneScreen);
  return (
    <div className="ourProcess__container">
      <div className="ourProcess__cards">
        {arr.map((data, index) => (
          <React.Fragment key={data.title}>
            <div className="card__parent">
              <div className="card1">
                <Image src={data.image} alt="" className="card__image" />
                <div className="header">
                  <div className="heading">{data.title}</div>
                  <ArrowWhite className="cursor" />
                </div>
                <div className="card__info">{data.info}</div>
              </div>
              {
                isTabletScreen ? (
                  index === 0  || index === 2 || index === 4 ? (
                    <div className="border" />
                  ) : null
                ): isPhoneScreen ? (
                  null
                ):(
                  index === 0 || index === 1 || index === 3 || index === 4 ? (
                    <div className="border" />
                  ) : null
                )
              }
            </div>

          </React.Fragment>
        ))}
      </div>
    </div>
  )
};




export default OurProcess;
