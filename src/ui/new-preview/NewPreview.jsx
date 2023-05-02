import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { NewPreviewCard } from './new-preview-card/NewPreviewCard';
import '../styles.css';

export const NewPreview = () => {
  return (
    <article className='new-preview-container'>
      <h2>New Releases</h2>
      <SeeAllBtn path='new' />
      <NewPreviewCard />
      <NewPreviewCard />
    </article>
  );
};
