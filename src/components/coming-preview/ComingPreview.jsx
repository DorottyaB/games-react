import { SeeAllBtn } from '../btn-see-all/SeeAllBtn';
import { ComingSoonCard } from '../coming-soon-card/ComingSoonCard';
import './coming-preview.css';

export const ComingPreview = () => {
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
