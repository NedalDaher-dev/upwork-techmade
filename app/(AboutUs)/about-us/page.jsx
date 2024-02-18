import React from 'react';
import Hero from './_components/Hero';
import './page.scss';
import Tagline from './_components/Tagline';
import Achievements from './_components/Achievements';

const page = () => (
  <section className="about-us-wrapper">
    <div className="about-us-container">
      <Hero />
      <Tagline />
      <Achievements />
    </div>
  </section>
);

export default page;
