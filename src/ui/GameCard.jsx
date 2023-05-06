/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/Utils';
import { PlatformList } from '../shared/platform-list/PlatformList';
import { Rating } from '../shared/rating/Rating';
import noImage from '../assets/no-image.png';
import './styles.css';

export const GameCard = ({ game }) => {
  return (
    <section className='game-card-container'>
      <img
        src={game.background_image !== null ? game.background_image : noImage}
        width='355'
        height='200'
        alt=''
      />
      <div className='game-card-body'>
        <Link to={`/games/${game.slug}`}>{game.name}</Link>
        <PlatformList platforms={game.parent_platforms} />
        <ul>
          {game.genres.map(genre => (
            <li key={genre.id}>
              <Link to={genre.slug} className='genre-link'>
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
        <Rating rating={game.metacritic} />
        <p>{formatDate(game.released)}</p>
      </div>
    </section>
  );
};
