import { Route, Routes } from 'react-router-dom';
import { RawgProvider } from './contexts/RawgContext';
import { MobileNavProvider } from './contexts/MobileNavContext';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';
import { GameDetails } from './routes/game-details/GameDetails';
import { GamesList } from './routes/games-list/GamesList';
import './App.css';

function App() {
  return (
    <MobileNavProvider>
      <RawgProvider>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path=':filter' element={<GamesList />} />
            <Route path='genres/:filter' element={<GamesList />} />
            <Route path='platforms/:filter' element={<GamesList />} />
            <Route path='games/:slug' element={<GameDetails />} />
          </Route>
        </Routes>
      </RawgProvider>
    </MobileNavProvider>
  );
}

export default App;
