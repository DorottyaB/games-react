import { Route, Routes } from 'react-router-dom';
import { QueryProvider } from './contexts/QueryContext';
import { MobileNavProvider } from './contexts/MobileNavContext';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';
import './App.css';

function App() {
  return (
    <MobileNavProvider>
      <QueryProvider>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            {/* <Route path='products/:productId' element={<Product />} /> */}
          </Route>
        </Routes>
      </QueryProvider>
    </MobileNavProvider>
  );
}

export default App;
