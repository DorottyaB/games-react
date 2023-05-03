import { useContext } from 'react';
import { QueryContext } from '../../contexts/QueryContext';
import { PopularCard } from './PopularCard';
import { LoadMoreBtn } from '../../shared/btn-load-more/LoadMoreBtn';
import '../styles.css';

export const Popular = () => {
  const { popularGames } = useContext(QueryContext);

  return (
    <article className='popular-container'>
      <h2>Popular Games</h2>
      {popularGames &&
        popularGames.slice(0, 6).map(game => <PopularCard key={game.id} game={game} />)}
      <LoadMoreBtn />
    </article>
  );
};
