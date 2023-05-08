import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { GameCard } from '../../ui/GameCard';
import { Footer } from '../../shared/footer/Footer';
import './game-list.css';

export const GamesList = () => {
  const { filter } = useParams();
  const value = useContext(RawgContext);
  const [list, setList] = useState([]);
  const { pathname } = useLocation();
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const [index, setIndex] = useState([0, 18]);

  useEffect(() => {
    if (filter && value) {
      Object.entries(value).forEach(([key, array]) => {
        key === filter ? setList(array) : key === 'games' ? setList(array) : null;
      });
    }
  }, [filter, value]);

  useEffect(() => {
    if (filter && value) {
      if (pathname.startsWith('/genres/')) {
        value.filterByGenre(filter);
      } else if (pathname.startsWith('/platforms/')) {
        value.filterByPlatform(filter);
      }
      value.setCurrentPage(1);
      setIndex([0, 18]);
    }
  }, [filter, pathname]);

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
    value.setCurrentPage(prevPage => prevPage - 1);
    setIndex(prevValue => {
      return [prevValue[0] - 18, prevValue[1] - 18];
    });
  };

  const loadNext = () => {
    value.setCurrentPage(prevPage => prevPage + 1);
    setIndex(prevValue => {
      return [prevValue[0] + 18, prevValue[1] + 18];
    });
  };

  return (
    <>
      <main className='main--game-list'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        <h2>{title}</h2>
        <article className='game-list-container'>
          {list &&
            list.slice(index[0], index[1]).map(item => <GameCard key={item.id} game={item} />)}
          <button
            className='btn-navigate btn-navigate-prev'
            onClick={loadPrev}
            disabled={value.currentPage === 1}
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
        </article>
      </main>
      <Footer />
    </>
  );
};
