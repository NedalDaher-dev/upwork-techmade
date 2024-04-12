'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import OurProcess from './_components/OurProcess';
import UpcomingEvents from './_components/UpcomingEvents';
import Hero from './_components/Hero';
import Excellence from './_components/Excellence';
import ExcellenceTwo from './_components/ExcellenceTwo';
import StartProj from './_components/StartProj';
import Cards from './_components/Cards';
import { useTheme } from '@/contexts/ThemeContext';

import './home.scss';

const Home = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();

  return (
    <div className="home__container">
      {
        tabletScreenWidth >= screenWidth ? (
          <>
            <div className='Footnotes' >
              <Hero />
              <Excellence />
            </div>
            <StartProj />
            <div className='Footnotes'>
              <OurProcess />
              {/* <UpcomingEvents /> */}
            </div>
          </>
        ) : (
          <>
            <div className='Footnotes'>
            <Hero />
              <Excellence />
              <ParallaxProvider>
                <StartProj />
                {/* Include other components as needed */}
              </ParallaxProvider>
              <Cards />
              <ExcellenceTwo />
              <OurProcess />
              <UpcomingEvents />
            </div>
          </>
        )
      }
    </div>
  )
};

export default Home
