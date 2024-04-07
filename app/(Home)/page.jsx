  "use client";
  import OurProcess from './_components/OurProcess';
  import UpcomingEvents from './_components/UpcomingEvents';
  import './home.scss';
  import { useSelector, useDispatch } from 'react-redux';
  const Home = () => {


    return (
      <div className="home__container">
        <OurProcess />
        <UpcomingEvents />
      </div>
    )
  }

  export default Home