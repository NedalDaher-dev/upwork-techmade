'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import OurProcess from './_components/OurProcess';
import UpcomingEvents from './_components/UpcomingEvents';
import Hero from './_components/Hero';
import Excellence from './_components/Excellence';
import ExcellenceTwo from './_components/ExcellenceTwo';
import StartProj from './_components/StartProj';
import Cards from './_components/Cards';
import './home.scss';

const Home = () => (
  <div className="home__container">
    <div className='Footnotes' >
      <Hero />
      <Excellence />
      <ParallaxProvider>
        <StartProj />
        {/* Include other components as needed */}
      </ParallaxProvider>
      <Cards />
      <ExcellenceTwo/>

    </div>
    <OurProcess />
    <UpcomingEvents />
  </div>
);

export default Home
