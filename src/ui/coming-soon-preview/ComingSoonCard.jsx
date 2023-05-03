/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../styles.css';

export const ComingSoonCard = ({ game }) => {
  return (
    <div className='coming-soon-card-container'>
      <div className='card-img-container'>
        <img src={game.background_image} width='270' height='152' alt='' />
      </div>
      <Link to={game.slug} className='link-title'>
        {game.name}
      </Link>
      <p className='date'>Released on {game.released}</p>
    </div>
  );
};
