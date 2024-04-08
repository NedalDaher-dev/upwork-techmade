'use client';

import OurProcess from './_components/OurProcess';
import UpcomingEvents from './_components/UpcomingEvents';
import Hero from './_components/Hero';
import './home.scss';

const Home = () => (
  <div className="home__container">
    <div className='Footnotes' >
      <Hero/>
    </div>
    {/* <OurProcess />
    <UpcomingEvents /> */}
  </div>
);

export default Home
