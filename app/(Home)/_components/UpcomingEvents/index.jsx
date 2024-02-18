import Spiral from '@/assets/Icons/LandingPage/Spiral';
import React from 'react';

import './index.style.scss';

import cycle from '@/assets/images/LandingPage/cycle.png';
import Image from 'next/image';
import Button from '../Button';

const UpcomingEvents = () => (
  <div className="upcoming__container">
    <div className="upcoming__left">
      <div className="spiral">
        <Spiral />
      </div>
      <div className="info">Get ready to fully enjoy the upcoming event!</div>
      <Button text="contact us" />
    </div>
    <Image src={cycle} alt="not-found" className="event__cycle" />
  </div>
);

export default UpcomingEvents;
