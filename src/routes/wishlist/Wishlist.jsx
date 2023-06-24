import { useContext } from 'react';
import { WishlistContext } from '../../contexts/WishlistContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import { formatDate } from '../../utils/Utils';
import './wishlist.css';

const Wishlist = () => {
  const { games, removeGame } = useContext(WishlistContext);
  const { isMobileNavOpen } = useContext(MobileNavContext);

  return (
    <main className='main--wishlist'>
      <div className='overlay' hidden={!isMobileNavOpen}></div>
      <SearchBar />
      <h2>Wishlist</h2>
      {games.length === 0 ? (
        <p style={{ fontSize: '20px' }}>No games found.</p>
      ) : (
        <article className='wishlist-container'>
          {games.map(game => (
            <div key={game.id} className='wishlist-card'>
              <h3>{game.name}</h3>
              <p>{formatDate(game.released)}</p>
              <div className='align-end'>
                <PlatformList platforms={game.platforms} />
                <button
                  onClick={() => removeGame(game.slug)}
                  className='btn-remove'
                  aria-label='Remove from Wishlist'
                  title='Remove'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='31'
                    height='31'
                    fill='#e57c5a'
                    viewBox='0 0 256 256'
                  >
                    <path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </article>
      )}
    </main>
  );
};

export default Wishlist;
