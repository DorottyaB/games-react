import { SeeAllBtn } from '../../shared/btn-see-all/SeeAllBtn';
import { ComingSoonCard } from './ComingSoonCard';
import '../styles.css';

export const ComingSoonPreview = () => {
  return (
    <article className='coming-preview-container'>
      <h2>Coming Soon</h2>
      <SeeAllBtn path='comingSoon' />
      <section className='sm-horizontal'>
        <ComingSoonCard />
        <ComingSoonCard />
        <ComingSoonCard />
      </section>
    </article>
  );
};
