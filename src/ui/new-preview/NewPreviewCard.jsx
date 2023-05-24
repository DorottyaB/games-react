/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Rating } from '../../shared/rating/Rating';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import '../styles.css';

export const NewPreviewCard = ({ game }) => {
  return (
    <Link to={`/games/${game.slug}`} className='preview-card-container'>
      <img loading='lazy' src={game.background_image} width='355' height='200' alt='' />
      <div className='info-container'>
        <h3>{game.name}</h3>
        <Rating rating={game.metacritic} />
        <PlatformList platforms={game.parent_platforms} />
      </div>
    </Link>
  );
};
