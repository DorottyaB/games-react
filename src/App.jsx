import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RawgProvider } from './contexts/RawgContext';
import { MobileNavProvider } from './contexts/MobileNavContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';
import { NotFound } from './routes/not-found/NotFound';
import { Spinner } from './shared/spinner/Spinner';
import './App.css';

const GamesList = lazy(() => import('./routes/games-list/GamesList'));
const SearchResults = lazy(() => import('./routes/games-list/SearchResults'));
const GameDetails = lazy(() => import('./routes/game-details/GameDetails'));
const Wishlist = lazy(() => import('./routes/wishlist/Wishlist'));

function App() {
  return (
    <MobileNavProvider>
      <RawgProvider>
        <WishlistProvider>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route
                path=':filter'
                element={
                  <Suspense fallback={<Spinner />}>
                    <GamesList />
                  </Suspense>
                }
              />
              <Route
                path='search/:query'
                element={
                  <Suspense fallback={<Spinner />}>
                    <SearchResults />
                  </Suspense>
                }
              />
              <Route
                path='genres/:filter'
                element={
                  <Suspense fallback={<Spinner />}>
                    <GamesList />
                  </Suspense>
                }
              />
              <Route
                path='platforms/:filter'
                element={
                  <Suspense fallback={<Spinner />}>
                    <GamesList />
                  </Suspense>
                }
              />
              <Route
                path='games/:slug'
                element={
                  <Suspense fallback={<Spinner />}>
                    <GameDetails />
                  </Suspense>
                }
              />
              <Route
                path='wishlist'
                element={
                  <Suspense fallback={<Spinner />}>
                    <Wishlist />
                  </Suspense>
                }
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </WishlistProvider>
      </RawgProvider>
    </MobileNavProvider>
  );
}

export default App;
