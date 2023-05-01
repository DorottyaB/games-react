import { Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryProvider } from './contexts/QueryContext';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path='products/:productId' element={<Product />} /> */}
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
