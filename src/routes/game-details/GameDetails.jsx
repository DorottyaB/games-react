import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RawgContext } from '../../contexts/RawgContext';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { formatDate } from '../../utils/Utils';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import { Error } from '../../shared/error/Error';
import noImage from '../../assets/no-image.png';
import './game-details.css';

const GameDetails = () => {
  const { slug } = useParams();
  const { games, recentGames, sortedGames, upcomingGames, searchedGame, error } =
    useContext(RawgContext);
  const [game, setGame] = useState();
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const [index, setIndex] = useState([0, 4]);

  useEffect(() => {
    function findGame() {
      const allGames = [
        ...games,
        ...recentGames,
        ...sortedGames,
        ...upcomingGames,
        ...searchedGame,
      ];
      const foundGame = allGames.find(g => g.slug === slug);
      setGame(foundGame);
    }
    findGame();
  }, []);

  const loadMore = () => {
    setIndex(prevValue => {
      return [0, prevValue[1] + 6];
    });
  };

  if (error) {
    return <Error />;
  }

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
              ), url(${game.background_image !== null ? game.background_image : noImage})`,
              }}
            >
              <p className='released'>Released on {formatDate(game.released)}</p>
              <h2 className='game-title'>{game.name}</h2>
              <PlatformList platforms={game.parent_platforms} />
              <ul className='game-genre-list'>
                {game.genres.map(genre => (
                  <li key={genre.id}>
                    <Link to={`/genres/${genre.slug}`} className='game-genre'>
                      {genre.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <section className='game-ratings-container'>
                <div>
                  <p>{game.ratings_count} rating(s)</p>
                  <h4>{game.ratings.length > 0 ? game.ratings[0].title : '-'}</h4>
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
              {game.short_screenshots !== null
                ? game.short_screenshots.slice(index[0], index[1]).map(img => (
                    <Link key={img.id} to={img.image} target='_blank'>
                      <img
                        loading='lazy'
                        className='screenshot'
                        width='316'
                        height='192'
                        src={img.image}
                      ></img>
                    </Link>
                  ))
                : null}
              {game.short_screenshots !== null && game.short_screenshots.length > index[1] ? (
                <button className='btn-show-screenshots' onClick={loadMore}>
                  Show All
                </button>
              ) : null}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default GameDetails;
