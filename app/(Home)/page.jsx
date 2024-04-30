'use client';
import dynamic from 'next/dynamic';
import { ParallaxProvider } from 'react-scroll-parallax';
const OurProcess = dynamic(() => import('./_components/OurProcess'), { ssr: false });
const UpcomingEvents = dynamic(() => import('./_components/UpcomingEvents'), { ssr: false });
const StartProj = dynamic(() => import('./_components/StartProj'), { ssr: false });
const Cards = dynamic(() => import('./_components/Cards'), { ssr: false });
const ExcellenceTwo = dynamic(() => import('./_components/ExcellenceTwo'), { ssr: false });
const Excellence = dynamic(() => import('./_components/Excellence'), { ssr: false });
const Hero = dynamic(() => import('./_components/Hero'), { ssr: false });

import { useTheme } from '@/contexts/ThemeContext';
import './home.scss';

const Home = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();

  return (
    <div className="home__wrapper">
      <div className="home__container" >
      {
        tabletScreenWidth >= screenWidth ? (
          <>
            <div className='Footnotes'>
              <Hero />
              <Excellence />
            </div>
            <StartProj />
            <div className='Footnotes'>
              <OurProcess />
            </div>
          </>
        ) : (
          <>
            <div className='Footnotes'>
              <Hero />
              <Excellence />
              <ParallaxProvider>
                <StartProj />
                <Cards />
                <ExcellenceTwo />
                <OurProcess />
              </ParallaxProvider>
            </div>
            <div className='Footnotes'>
              <UpcomingEvents />
            </div>
          </>
        )
      }
      </div>
    </div>
  );
};

export default Home;
