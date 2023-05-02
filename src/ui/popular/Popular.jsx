import { LoadMoreBtn } from '../../shared/btn-load-more/LoadMoreBtn';
import { PopularCard } from './popular-card/PopularCard';
import '../styles.css';

export const Popular = () => {
  return (
    <article className='popular-container'>
      <h2>Popular</h2>
      <PopularCard />
      <PopularCard />
      <LoadMoreBtn />
    </article>
  );
};
