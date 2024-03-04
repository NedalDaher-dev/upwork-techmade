'use client';

import React, { useState } from 'react';
import './index.styles.scss';
import { motion } from 'framer-motion';
import Location from '@/assets/Icons/Location';
import ClosePurple from '@/assets/Icons/ClosePurple';
import ExperienceIcon from '@/assets/Icons/ExperienceIcon';
import Heart from '@/assets/Icons/Heart';
import Dislike from '@/assets/Icons/Dislike';
import MottoIcon from '@/assets/Icons/MottoIcon';
import { team } from './constants';

const Team = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section className="about_us_team_wrapper">
      <div className="container">
        <div className="heading-container">
          <h1>Meet The Team</h1>
          <p>
            Our success starts with joyful collaboration and ends with delighted
            clients.
          </p>
        </div>
        <div className="team-wrapper">
          {team.map((item, idx) => (
            <motion.div
              layoutId={idx + 1}
              className="team-item-container"
              onClick={() => setIsOpen(idx + 1)}
            >
              <motion.div className="image">
                <img src={item.img} alt={`${item.name}`} />
              </motion.div>
              <div className="text-wrapper">
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {isOpen && (
          <>
            <motion.div layoutId={isOpen} className="modal-wrapper">
              <div className="modal-header">
                <div className="flex">
                  <Location />
                  <p>San Francisco</p>
                </div>
                <div className="flex-button" onClick={() => setIsOpen(null)}>
                  <button type="button">Close</button>
                  <ClosePurple />
                </div>
              </div>
              <motion.div className="image-modal">
                {' '}
                <img
                  src={team[isOpen - 1].img}
                  alt={`${team[isOpen - 1].name}`}
                />
              </motion.div>
              <div className="text-wrapper">
                <h3>{team[isOpen - 1].name}</h3>
                <p>{team[isOpen - 1].position}</p>
              </div>
              <div className="desc-wrapper">
                <div className="flex-desc">
                  <ExperienceIcon />
                  <p className="text-desc">
                    Designing and building product since 2014
                  </p>
                </div>
                <div className="flex-desc">
                  <Heart />
                  <p className="text-desc">Painting, Signing, Writing</p>
                </div>
                <div className="flex-desc">
                  <Dislike />
                  <p className="text-desc">Snow</p>
                </div>
              </div>
              <div className="motto-wrapper">
                <div className="motto-flex">
                  <MottoIcon />
                  <p>Motto</p>
                </div>
                <div className="motto-desc">
                  Embrace a positive outlook even in challenging situations.
                </div>
              </div>
            </motion.div>
            <div className="modal-underlay" onClick={() => setIsOpen(false)} />
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
