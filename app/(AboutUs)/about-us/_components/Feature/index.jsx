import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { features } from './constants';
import './index.styles.scss';
import { useTheme } from '@/contexts/ThemeContext';

const Features = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
  console.log(screenWidth, tabletScreenWidth);
  // حالة لتخزين عدد البطاقات المراد عرضها
  const [visibleFeatures, setVisibleFeatures] = useState(features);

  // حدث useEffect لتحديث البطاقات المرئية بناءً على عرض الشاشة
  useEffect(() => {
    let value = screenWidth <= tabletScreenWidth ? features.slice(0, 3) : features;
    setVisibleFeatures(value);
  }, [screenWidth, tabletScreenWidth]);

  // حالة وخصائص الحركة لكل بطاقة
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  // حساب تحولات الحركة
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  // معالج الحركة على البطاقات
  const handleMouseMove = (xy) => set({ xys: calc(xy[0], xy[1]) });
  const handleMouseLeave = () => set({ xys: [0, 0, 1] });

  return (
    <div className="about-us-features-wrapper">
      <div className="about-us-features-container">
        {visibleFeatures.map((item) => (
          <animated.div
            key={item.title}
            onMouseMove={({ clientX: x, clientY: y }) => handleMouseMove([x, y])}
            onMouseLeave={handleMouseLeave}
            className="feature-card-container"
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <h2>{item.title}</h2>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
