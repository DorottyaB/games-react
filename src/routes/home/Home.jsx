import { useContext } from 'react';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { NewPreview } from '../../ui/new-preview/NewPreview';
import { ComingSoonPreview } from '../../ui/coming-soon-preview/ComingSoonPreview';
import { Popular } from '../../ui/popular/Popular';
import { Footer } from '../../shared/footer/Footer';
import './home.css';

export const Home = () => {
  const { isMobileNavOpen } = useContext(MobileNavContext);

  return (
    <>
      <main>
        <div className='overlay' hidden={!isMobileNavOpen}></div>
        <SearchBar />
        <NewPreview />
        <ComingSoonPreview />
        <Popular />
      </main>
      <Footer />
    </>
  );
};
