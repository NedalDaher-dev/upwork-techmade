import React from 'react';
import { features } from './constants';
import './index.styles.scss';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const Features = () => {
  // تعريف الدالة لحساب التحويلات بناءً على موقع الماوس
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <div className="about-us-features-wrapper">
      <div className="about-us-features-container">
        {features.map((item) => {
          // استخدام react-spring و react-use-gesture لكل بطاقة
          const [props, set] = useSpring(() => ({
            xys: [0, 0, 1],
            config: { mass: 5, tension: 350, friction: 40 }
          }));
          const bind = useGesture({
            onMove: ({ xy }) => set({ xys: calc(xy[0], xy[1]) }),
            onHover: ({ hovering }) => !hovering && set({ xys: [0, 0, 1] })
          });

          return (
            <animated.div
              key={item.title}
              {...bind()}
              className="feature-card-container"
              style={{
                transform: props.xys.interpolate(trans)
              }}
            >
              <h2>{item.title}</h2>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
