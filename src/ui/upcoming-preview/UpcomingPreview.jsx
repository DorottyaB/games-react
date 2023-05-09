import { useContext } from 'react';
import { RawgContext } from '../../contexts/RawgContext';
import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { UpcomingCard } from './UpcomingCard';
import '../styles.css';

export const UpcomingPreview = () => {
  const { upcomingGames } = useContext(RawgContext);

  return (
    <article className='upcoming-preview-container'>
      <h2>Coming Soon</h2>
      <SeeAllBtn path='upcomingGames' />
      <section className='sm-horizontal'>
        {upcomingGames?.slice(0, 7).map(game => (
          <UpcomingCard key={game.id} game={game} />
        ))}
      </section>
    </article>
  );
};
