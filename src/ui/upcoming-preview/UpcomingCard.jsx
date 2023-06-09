/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/Utils';
import noImage from '../../assets/no-image.png';
import '../styles.css';

export const UpcomingCard = ({ game }) => {
  return (
    <div className='upcoming-card-container'>
      <div className='card-img-container'>
        <img
          loading='lazy'
          src={game.background_image !== null ? game.background_image : noImage}
          width='270'
          height='152'
          alt=''
        />
      </div>
      <Link to={`/games/${game.slug}`} className='link-title'>
        {game.name}
      </Link>
      <p className='date'>Released on {formatDate(game.released)}</p>
    </div>
  );
};
