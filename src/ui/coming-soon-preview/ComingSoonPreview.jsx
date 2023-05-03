import { useContext } from 'react';
import { QueryContext } from '../../contexts/QueryContext';
import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { ComingSoonCard } from './ComingSoonCard';
import '../styles.css';

export const ComingSoonPreview = () => {
  const { comingGames } = useContext(QueryContext);

  return (
    <article className='coming-preview-container'>
      <h2>Coming Soon</h2>
      <SeeAllBtn path='comingSoon' />
      <section className='sm-horizontal'>
        {comingGames && comingGames.map(game => <ComingSoonCard key={game.id} game={game} />)}
      </section>
    </article>
  );
};
