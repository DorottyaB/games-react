import { useContext } from 'react';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { NewPreview } from '../../ui/new-preview/NewPreview';
import { UpcomingPreview } from '../../ui/upcoming-preview/UpcomingPreview';
import { Popular } from '../../ui/popular/Popular';
import { Footer } from '../../shared/footer/Footer';
import './home.css';

export const Home = () => {
  const { isMobileNavOpen } = useContext(MobileNavContext);

  return (
    <>
      <main className='main--home'>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        <NewPreview />
        <UpcomingPreview />
        <Popular />
      </main>
      <Footer />
    </>
  );
};
