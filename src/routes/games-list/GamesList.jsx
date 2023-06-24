import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { GameCard } from '../../ui/GameCard';
import { Error } from '../../shared/error/Error';
import { LinkWishlist } from '../../shared/link-wishlist/LinkWishlist';
import './games-list.css';

const GamesList = () => {
  const { filter } = useParams();
  const {
    recentGames,
    sortedGames,
    upcomingGames,
    games,
    currentPage,
    filterByGenre,
    filterByPlatform,
    setCurrentPage,
    error,
  } = useContext(RawgContext);
  const [list, setList] = useState([]);
  const { pathname } = useLocation();
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const [index, setIndex] = useState([0, 18]);

  useEffect(() => {
    if (filter && recentGames && sortedGames && upcomingGames && games) {
      if (filter === 'recentGames') {
        setList(recentGames);
      } else if (filter === 'sortedGames') {
        setList(sortedGames);
      } else if (filter === 'upcomingGames') {
        setList(upcomingGames);
      } else {
        setList(games);
      }
    }
  }, [filter, recentGames, sortedGames, upcomingGames, games]);

  useEffect(() => {
    if (filter) {
      if (pathname.startsWith('/genres/')) {
        filterByGenre(filter);
      } else if (pathname.startsWith('/platforms/')) {
        filterByPlatform(filter);
      }
      setCurrentPage(1);
      setIndex([0, 18]);
    }
  }, [filter, pathname]);

  useEffect(() => {
    if (pathname.startsWith('/genres/')) {
      filterByGenre(filter);
    } else if (pathname.startsWith('/platforms/')) {
      filterByPlatform(filter);
    }
  }, [currentPage]);

  function capitalizeHyphenatedString(str) {
    const words = str.split('-');
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return `${firstLetter}${restOfWord}`;
    });
    return capitalizedWords.join(' ');
  }

  const title =
    filter === 'sortedGames'
      ? 'Popular Games'
      : filter === 'upcomingGames'
      ? 'Coming Soon'
      : filter === 'recentGames'
      ? 'New Releases'
      : filter.includes('rpg')
      ? 'Role Playing Games'
      : filter === '1'
      ? 'PC'
      : filter === '2'
      ? 'PlayStation'
      : filter === '3'
      ? 'Xbox'
      : filter === '5'
      ? 'Mac OS'
      : filter === '6'
      ? 'Linux'
      : filter === '7'
      ? 'Nintendo'
      : capitalizeHyphenatedString(filter);

  const loadPrev = () => {
    setCurrentPage(prevPage => prevPage - 1);
    setIndex(prevValue => {
      return [prevValue[0] - 18, prevValue[1] - 18];
    });
    window.scrollTo(0, 0);
  };

  const loadNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setIndex(prevValue => {
      return [prevValue[0] + 18, prevValue[1] + 18];
    });
    window.scrollTo(0, 0);
  };

  if (error) {
    return <Error />;
  }

  return (
    <main className='main--game-list'>
      <div className='overlay' hidden={!isMobileNavOpen}></div>
      <SearchBar />
      <LinkWishlist />
      {list.length === 0 ? (
        <p style={{ fontSize: '20px' }}>No games found.</p>
      ) : (
        <>
          <h2>{title}</h2>
          <article className='game-list-container'>
            {list?.slice(index[0], index[1]).map(item => (
              <GameCard key={item.id} game={item} />
            ))}
            <div className='btn-navigate-container'>
              <button
                className='btn-navigate btn-navigate-prev'
                onClick={loadPrev}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  style={{ rotate: '90deg' }}
                  fill='rgba(245, 245, 245, 0.6)'
                  viewBox='0 0 256 256'
                >
                  <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
                </svg>{' '}
                Previous
              </button>
              <button
                className='btn-navigate btn-navigate-next'
                onClick={loadNext}
                disabled={index[1] > list.length}
              >
                Next{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  style={{ rotate: '270deg' }}
                  fill='rgba(245, 245, 245, 0.6)'
                  viewBox='0 0 256 256'
                >
                  <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
                </svg>
              </button>
            </div>
          </article>
        </>
      )}
    </main>
  );
};

export default GamesList;
