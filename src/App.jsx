import { Route, Routes } from 'react-router-dom';
import { RawgProvider } from './contexts/RawgContext';
import { MobileNavProvider } from './contexts/MobileNavContext';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';
import { SearchResults } from './routes/games-list/SearchResults';
import { GamesList } from './routes/games-list/GamesList';
import { GameDetails } from './routes/game-details/GameDetails';
import { NotFound } from './routes/not-found/NotFound';
import './App.css';

function App() {
  return (
    <MobileNavProvider>
      <RawgProvider>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path=':filter' element={<GamesList />} />
            <Route path='search/:query' element={<SearchResults />} />
            <Route path='genres/:filter' element={<GamesList />} />
            <Route path='platforms/:filter' element={<GamesList />} />
            <Route path='games/:slug' element={<GameDetails />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      </RawgProvider>
    </MobileNavProvider>
  );
}

export default App;
