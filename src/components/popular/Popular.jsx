import { LoadMoreBtn } from '../btn-load-more/LoadMoreBtn';
import { PopularCard } from '../popular-card/PopularCard';
import './popular.css';

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
