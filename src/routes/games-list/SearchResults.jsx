import { useContext } from 'react';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { GameCard } from '../../ui/GameCard';
import { Footer } from '../../shared/footer/Footer';
import './games-list.css';

export const SearchResults = () => {
  const { query } = useParams();
  const { searchedGame } = useContext(RawgContext);
  const { isMobileNavOpen } = useContext(MobileNavContext);

  return (
    <>
      <main className='main--game-list'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        <h2>Search results for &apos;{query}&apos;</h2>
        <article className='game-list-container'>
          {searchedGame && searchedGame.map(item => <GameCard key={item.id} game={item} />)}
        </article>
      </main>
      <Footer />
    </>
  );
};
