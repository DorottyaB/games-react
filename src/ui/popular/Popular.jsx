import { useContext, useState } from 'react';
import { RawgContext } from '../../contexts/RawgContext';
import { GameCard } from '../GameCard';
import { LoadMoreBtn } from '../../shared/btn-load-more/LoadMoreBtn';
import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import '../styles.css';

export const Popular = () => {
  const { sortedGames } = useContext(RawgContext);
  const [index, setIndex] = useState([0, 6]);

  const loadMore = () => {
    setIndex(prevValue => {
      return [0, prevValue[1] + 6];
    });
  };

  return (
    <article className='popular-container'>
      <h2>Popular Games</h2>
      {sortedGames?.slice(index[0], index[1]).map(game => (
        <GameCard key={game.id} game={game} />
      ))}
      {sortedGames?.length > index[1] ? <LoadMoreBtn handleClick={loadMore} /> : null}
      {sortedGames?.length <= index[1] ? <SeeAllBtn path='sortedGames' /> : null}
    </article>
  );
};
