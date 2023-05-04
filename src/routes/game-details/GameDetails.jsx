import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { Footer } from '../../shared/footer/Footer';
import './game-details.css';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';

export const GameDetails = () => {
  const { slug } = useParams();
  const { recentGames, sortedGames, upcomingGames } = useContext(RawgContext);
  const [game, setGame] = useState([]);
  const { isMobileNavOpen } = useContext(MobileNavContext);

  useEffect(() => {
    function findGame() {
      if (recentGames && sortedGames && upcomingGames) {
        const games = [...recentGames, ...sortedGames, ...upcomingGames];
        const foundGame = games.find(g => g.slug === slug);
        setGame(foundGame);
      }
    }

    findGame();
    console.log(game);
  }, []);

  return (
    <>
      <main className='main--game'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        {game && (
          <article
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(23, 23, 23, 1) 0%,
                rgba(23, 23, 23, 0.9716619924336922) 10%,
                rgba(23, 23, 23, 0.9268440652628239) 20%,
                rgba(23, 23, 23, 0.8540149336101628) 30%,
                rgba(23, 23, 23, 0) 100%
              ), url(${game.background_image})`,
            }}
          >
            <p className='released'>Released on {game.released}</p>
            <h2 className='game-title'>{game.name}</h2>
            <PlatformList platforms={game.parent_platforms} />
          </article>
        )}
      </main>
      <Footer />
    </>
  );
};
