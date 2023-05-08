import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { Logo } from '../../shared/logo/Logo';
import './navigation.css';

export const Navigation = () => {
  const { width } = useWindowDimensions();
  const { isMobileNavOpen, setIsMobileNavOpen } = useContext(MobileNavContext);
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMobileNavOpen) {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  }, [pathname]);

  return (
    <>
      <nav>
        <Logo />
        <div
          className={`hamburger ${isMobileNavOpen ? 'active' : ''}`}
          onClick={() => setIsMobileNavOpen(prevState => !prevState)}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        {isMobileNavOpen || width >= 1024 ? (
          <div className='nav-items'>
            <Link to='recentGames'>New</Link>
            <Link to='sortedGames'>Popular</Link>
            <Link to='upcomingGames'>Coming Soon</Link>
            <button onClick={() => setIsGenreOpen(prevState => !prevState)}>
              Genres
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='#e57c5a'
                viewBox='0 0 256 256'
                className={isGenreOpen ? 'open' : 'close'}
              >
                <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
              </svg>
            </button>
            {isGenreOpen && (
              <ul className='dropdown-items'>
                <li>
                  <Link to='genres/action'>Action</Link>
                </li>
                <li>
                  <Link to='genres/adventure'>Adventure</Link>
                </li>
                <li>
                  <Link to='genres/arcade'>Arcade</Link>
                </li>
                <li>
                  <Link to='genres/board-games'>Board Games</Link>
                </li>
                <li>
                  <Link to='genres/card'>Card</Link>
                </li>
                <li>
                  <Link to='genres/casual'>Casual</Link>
                </li>
                <li>
                  <Link to='genres/educational'>Educational</Link>
                </li>
                <li>
                  <Link to='genres/family'>Family</Link>
                </li>
                <li>
                  <Link to='genres/fighting'>Fighting</Link>
                </li>
                <li>
                  <Link to='genres/indie'>Indie</Link>
                </li>
                <li>
                  <Link to='genres/massively-multiplayer'>Multiplayer</Link>
                </li>
                <li>
                  <Link to='genres/platformer'>Platformer</Link>
                </li>
                <li>
                  <Link to='genres/puzzle'>Puzzle</Link>
                </li>
                <li>
                  <Link to='genres/racing'>Racing</Link>
                </li>
                <li>
                  <Link to='genres/rpg'>RPG</Link>
                </li>
                <li>
                  <Link to='genres/simulation'>Simulation</Link>
                </li>
                <li>
                  <Link to='genres/shooter'>Shooter</Link>
                </li>
                <li>
                  <Link to='genres/sports'>Sports</Link>
                </li>
                <li>
                  <Link to='genres/strategy'>Strategy</Link>
                </li>
              </ul>
            )}
            <button onClick={() => setIsPlatformOpen(prevState => !prevState)}>
              Platforms
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='#e57c5a'
                viewBox='0 0 256 256'
                className={isPlatformOpen ? 'open' : 'close'}
              >
                <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
              </svg>
            </button>
            {isPlatformOpen && (
              <ul className='dropdown-items'>
                <li>
                  <Link to='platforms/1'>PC</Link>
                </li>
                <li>
                  <Link to='platforms/2'>PlayStation</Link>
                </li>
                <li>
                  <Link to='platforms/3'>Xbox</Link>
                </li>
                <li>
                  <Link to='platforms/7'>Nintento</Link>
                </li>
                <li>
                  <Link to='platforms/5'>MacOS</Link>
                </li>
                <li>
                  <Link to='platforms/6'>Linux</Link>
                </li>
              </ul>
            )}
          </div>
        ) : null}
      </nav>
      <Outlet />
    </>
  );
};
