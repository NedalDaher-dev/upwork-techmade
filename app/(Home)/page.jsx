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
import MainImage from '@/assets/images/WorkPage/MainImage';
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
             <MainImage className='MainImage'/>
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
              <MainImage className='MainImage'/>
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
