import { useContext } from 'react';
import { QueryContext } from '../../contexts/QueryContext';
import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { NewPreviewCard } from './NewPreviewCard';
import '../styles.css';

export const NewPreview = () => {
  const { newGames } = useContext(QueryContext);

  return (
    <article className='new-preview-container'>
      <h2>New Releases</h2>
      <SeeAllBtn path='new' />
      {newGames && newGames.map(game => <NewPreviewCard key={game.id} game={game} />)}
    </article>
  );
};
