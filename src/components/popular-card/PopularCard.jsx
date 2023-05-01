import './popular-card.css';
import img1 from '../../assets/horizon.png';
import { Link } from 'react-router-dom';
import { PlatformList } from '../platform-list/PlatformList';
import { Rating } from '../rating/Rating';

export const PopularCard = () => {
  return (
    <section className='popular-card-container'>
      <img src={img1} height='185' alt='' />
      <div className='popular-card-body'>
        <Link to=''>Horizon Forbidden West</Link>
        <PlatformList />
        <ul>
          <li>
            <Link to='' className='genre-link'>
              Action
            </Link>
          </li>
          <li>
            <Link to='' className='genre-link'>
              RPG
            </Link>
          </li>
        </ul>
        <Rating />
        <p>21/4/2023</p>
      </div>
    </section>
  );
};
