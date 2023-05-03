/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Rating } from '../../shared/rating/Rating';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import '../styles.css';

export const NewPreviewCard = ({ game }) => {
  return (
    <Link to={game.slug} className='preview-card-container'>
      <img src={game.background_image} width='355' height='200' alt='' />
      <div className='info-container'>
        <h3>{game.name}</h3>
        <Rating rating={game.metacritic} />
        <PlatformList platforms={game.parent_platforms} />
      </div>
    </Link>
  );
};
