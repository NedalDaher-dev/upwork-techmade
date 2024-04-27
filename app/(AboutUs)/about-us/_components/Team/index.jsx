'use client';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { motion } from 'framer-motion';
import Location from '@/assets/Icons/Location';
import ClosePurple from '@/assets/Icons/ClosePurple';
import ExperienceIcon from '@/assets/Icons/ExperienceIcon';
import Heart from '@/assets/Icons/Heart';
import Dislike from '@/assets/Icons/Dislike';
import { team } from './constants';
import '@/styles/index.scss';
import './index.styles.scss';

const Team = () => {
  const [isOpen, setIsOpen] = useState(null);
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 },
  }

  // تعريف الحركة للبطاقات
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <section id='Meet-the-team' className="about_us_team_wrapper">
      <div className="container">
        <div className="heading-container">
          <h1>Meet The Team</h1>
          <p>Our success starts with joyful collaboration and ends with delighted clients.</p>
        </div>
        <div className="team-wrapper">
          {team.map((item, idx) => {
            const [props, set] = useSpring(() => ({
              xys: [0, 0, 1],
              config: { mass: 5, tension: 350, friction: 40 }
            }));
            const bind = useGesture({
              onMove: ({ xy }) => set({ xys: calc(xy[0], xy[1]) }),
              onHover: ({ hovering }) => !hovering && set({ xys: [0, 0, 1] })
            });
            return (
              <motion.div
                layoutId={idx + 1}
                className="team-item-container"
                onClick={() => setIsOpen(idx + 1)}
                key={idx}
              >
                <animated.div
                  {...bind()}
                  style={{ transform: props.xys.interpolate(trans) }}
                  className="image"
                >
                  <img src={item.img} alt={`${item.name}`} />
                </animated.div>
                <div className="text-wrapper">
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {isOpen && (
          <div className="modal-container">
            <motion.div layoutId={isOpen} className="modal-wrapper">
              <div className="modal-header">
                <div className="flex">
                  <Location />
                  <p>San Francisco</p>
                </div>
                <motion.div onClick={() => setIsOpen(false)} className="flex-button" {...fadeIn}>
                  <ClosePurple />
                </motion.div>
              </div>
              <motion.div className="image-modal">
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
            </motion.div>
            {/* <div className="modal-underlay"  /> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
