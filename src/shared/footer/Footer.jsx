import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { Logo } from '../logo/Logo';
import './footer.css';

export const Footer = () => {
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const [date, setDate] = useState('');

  useEffect(() => {
    const getDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      setDate(year);
    };

    getDate();
  }, []);

  return (
    <footer>
      <div className='overlay' hidden={!isMobileNavOpen}></div>
      <Logo />
      <ul className='footer-nav-items'>
        <li>
          <Link to='/recentGames'>New</Link>
        </li>
        <li>
          <Link to='/sortedGames'>Popular</Link>
        </li>
        <li>
          <Link to='/upcomingGames'>Coming Soon</Link>
        </li>
      </ul>
      <p>
        Data and images are from <a href='https://rawg.io'>RAWG.io</a>
      </p>
      <p>
        Created by <a href='https://github.com/DorottyaB'>Dorottya</a>
      </p>
      <p className='copyright'>{date} © All Rights Reserved.</p>
    </footer>
  );
};
