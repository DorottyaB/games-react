import { useContext } from 'react';
import { RawgContext } from '../../contexts/RawgContext';
import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { NewPreviewCard } from './NewPreviewCard';
import '../styles.css';

export const NewPreview = () => {
  const { recentGames } = useContext(RawgContext);

  return (
    <article className='new-preview-container'>
      <h2>New Releases</h2>
      <SeeAllBtn path='recentGames' />
      {recentGames &&
        recentGames.slice(0, 2).map(game => <NewPreviewCard key={game.id} game={game} />)}
    </article>
  );
};
