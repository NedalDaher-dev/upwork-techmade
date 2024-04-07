"use client";
import React from 'react';
import Hero from './_components/Hero';
import './page.scss';
import Tagline from './_components/Tagline';
import Achievements from './_components/Achievements';
import Team from './_components/Team';
import Features from './_components/Feature';
import { useTheme } from '@/contexts/ThemeContext';

const Page = () => {
  const { theme, phoneScreenWidth, screenWidth, toggleTheme } = useTheme();

  return (
    <section className="about-us-wrapper">
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
