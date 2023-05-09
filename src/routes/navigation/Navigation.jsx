import { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { Logo } from '../../shared/logo/Logo';
import './navigation.css';
import { Footer } from '../../shared/footer/Footer';

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
            <NavLink to='recentGames'>New</NavLink>
            <NavLink to='sortedGames'>Popular</NavLink>
            <NavLink to='upcomingGames'>Coming Soon</NavLink>
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
                  <NavLink to='genres/action'>Action</NavLink>
                </li>
                <li>
                  <NavLink to='genres/adventure'>Adventure</NavLink>
                </li>
                <li>
                  <NavLink to='genres/arcade'>Arcade</NavLink>
                </li>
                <li>
                  <NavLink to='genres/board-games'>Board Games</NavLink>
                </li>
                <li>
                  <NavLink to='genres/card'>Card</NavLink>
                </li>
                <li>
                  <NavLink to='genres/casual'>Casual</NavLink>
                </li>
                <li>
                  <NavLink to='genres/educational'>Educational</NavLink>
                </li>
                <li>
                  <NavLink to='genres/family'>Family</NavLink>
                </li>
                <li>
                  <NavLink to='genres/fighting'>Fighting</NavLink>
                </li>
                <li>
                  <NavLink to='genres/indie'>Indie</NavLink>
                </li>
                <li>
                  <NavLink to='genres/massively-multiplayer'>Multiplayer</NavLink>
                </li>
                <li>
                  <NavLink to='genres/platformer'>Platformer</NavLink>
                </li>
                <li>
                  <NavLink to='genres/puzzle'>Puzzle</NavLink>
                </li>
                <li>
                  <NavLink to='genres/racing'>Racing</NavLink>
                </li>
                <li>
                  <NavLink to='genres/role-playing-games-rpg'>RPG</NavLink>
                </li>
                <li>
                  <NavLink to='genres/simulation'>Simulation</NavLink>
                </li>
                <li>
                  <NavLink to='genres/shooter'>Shooter</NavLink>
                </li>
                <li>
                  <NavLink to='genres/sports'>Sports</NavLink>
                </li>
                <li>
                  <NavLink to='genres/strategy'>Strategy</NavLink>
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
                  <NavLink to='platforms/1'>PC</NavLink>
                </li>
                <li>
                  <NavLink to='platforms/2'>PlayStation</NavLink>
                </li>
                <li>
                  <NavLink to='platforms/3'>Xbox</NavLink>
                </li>
                <li>
                  <NavLink to='platforms/7'>Nintento</NavLink>
                </li>
                <li>
                  <NavLink to='platforms/5'>MacOS</NavLink>
                </li>
                <li>
                  <NavLink to='platforms/6'>Linux</NavLink>
                </li>
              </ul>
            )}
          </div>
        ) : null}
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
