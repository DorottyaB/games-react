import { SeeAllBtn } from '../btn-see-all/SeeAllBtn';
import { NewPreviewCard } from '../new-preview-card/NewPreviewCard';
import './new-preview.css';

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
