import { useContext } from 'react';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { GameCard } from '../../ui/GameCard';
import { Spinner } from '../../shared/spinner/Spinner';
import { Error } from '../../shared/error/Error';
import './games-list.css';

const SearchResults = () => {
  const { query } = useParams();
  const { searchedGame, isLoading, error } = useContext(RawgContext);
  const { isMobileNavOpen } = useContext(MobileNavContext);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className='main--game-list'>
          <div className='overlay' hidden={!isMobileNavOpen}></div>
          <SearchBar />
          <h2>Search results for &apos;{query}&apos;</h2>
          <article className='game-list-container'>
            {searchedGame?.length === 0 ? (
              <h3 style={{ alignSelf: 'start', opacity: '0.8' }}>Nothing found...</h3>
            ) : (
              searchedGame.map(item => <GameCard key={item.id} game={item} />)
            )}
          </article>
        </main>
      )}
    </>
  );
};

export default SearchResults;
