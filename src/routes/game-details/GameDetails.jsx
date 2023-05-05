import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import { Footer } from '../../shared/footer/Footer';
import './game-details.css';

export const GameDetails = () => {
  const { slug } = useParams();
  const { recentGames, sortedGames, upcomingGames } = useContext(RawgContext);
  const [game, setGame] = useState();
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const [url, setUrl] = useState('');

  useEffect(() => {
    function findGame() {
      const games = [...recentGames, ...sortedGames, ...upcomingGames];
      const foundGame = games.find(g => g.slug === slug);
      setGame(foundGame);
    }

    findGame();
  }, []);

  const openModal = img => {
    setUrl(img);
    document.querySelector('dialog').showModal();
  };

  const closeModal = () => {
    document.querySelector('dialog').close();
  };

  return (
    <>
      <main className='main--game'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        {game && (
          <>
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
              <ul className='game-genre-list'>
                {game.genres.map(genre => (
                  <li key={genre.id}>
                    <Link to={`/${genre.slug}`} className='game-genre'>
                      {genre.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <section className='game-ratings-container'>
                <div>
                  <p>{game.ratings_count} ratings</p>
                  <h4>{game.ratings[0].title}</h4>
                </div>
                <div>
                  <p>Metacritic</p>
                  <h4>{game.metacritic !== null ? game.metacritic : '∅'}</h4>
                </div>
              </section>
            </article>
            <p className='available-on'>
              Available on:{' '}
              {game.platforms.map(item => (
                <span key={item.platform.id}>{item.platform.name}</span>
              ))}
            </p>
            <div className='screenshots'>
              {game.short_screenshots.map(img => (
                <img
                  onClick={() => openModal(img.image)}
                  className='screenshot'
                  width='316'
                  height='192'
                  key={img.id}
                  src={img.image}
                ></img>
              ))}
              <dialog>
                <button className='btn-close-modal' onClick={closeModal}>
                  &times;
                </button>
                <img width='500' height='400' src={url} alt='' />
              </dialog>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
