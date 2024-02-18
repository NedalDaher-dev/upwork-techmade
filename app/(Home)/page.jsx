import OurProcess from './_components/OurProcess';
import UpcomingEvents from './_components/UpcomingEvents';
import './home.scss';

const Home = () => (
  <div className="home__container">
    <OurProcess />
    <UpcomingEvents />
  </div>
);
export default Home;
