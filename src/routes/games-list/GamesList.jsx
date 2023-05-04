import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { GameCard } from '../../ui/GameCard';
import './game-list.css';
import { Footer } from '../../shared/footer/Footer';
import { MobileNavContext } from '../../contexts/MobileNavContext';

export const GamesList = () => {
  const { filter } = useParams();
  const value = useContext(RawgContext);
  const [list, setList] = useState([]);
  const { isMobileNavOpen } = useContext(MobileNavContext);

  useEffect(() => {
    if (filter && value) {
      Object.entries(value).forEach(([key, array]) => {
        key === filter ? setList(array) : null;
      });
    }

    console.log(list);
  }, [filter, value]);

  const title =
    filter === 'sortedGames'
      ? 'Popular Games'
      : filter === 'upcomingGames'
      ? 'Coming Soon'
      : 'New Releases';

  return (
    <>
      <main className='main--game-list'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        <h2>{title}</h2>
        <article className='game-list-container'>
          {list && list.map(item => <GameCard key={item.id} game={item} />)}
        </article>
      </main>
      <Footer />
    </>
  );
};
