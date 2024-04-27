'use client'; 

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Hero from './_components/Hero';
import './page.scss';
import Tagline from './_components/Tagline';
import Achievements from './_components/Achievements';
import Team from './_components/Team';
import Features from './_components/Feature';

const Page = () => {
  const { theme, phoneScreenWidth, screenWidth, toggleTheme } = useTheme();
  console.log(phoneScreenWidth)

  return (
    <section id="about-us" className="about-us-wrapper">
      {
        phoneScreenWidth >= screenWidth ? (
          <div className="about-us-container">
            <div className="Footnotes">
              <Hero />
              <Achievements />
            </div>
            <Team />

          </div>
        ) : (
          <div className="about-us-container">
            <Hero />
            <Tagline />
            <Features />
            <Achievements />
            <Team />
          </div>
        )
      }

    </section>
  );
};

export default Page;
