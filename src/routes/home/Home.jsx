import { useContext } from 'react';
import { MobileNavContext } from '../../contexts/MobileNavContext';
import { RawgContext } from '../../contexts/RawgContext';
import { SearchBar } from '../../shared/search-bar/SearchBar';
import { NewPreview } from '../../ui/new-preview/NewPreview';
import { UpcomingPreview } from '../../ui/upcoming-preview/UpcomingPreview';
import { Popular } from '../../ui/popular/Popular';
import { Spinner } from '../../shared/spinner/Spinner';
import { Error } from '../../shared/error/Error';
import './home.css';
import { LinkWishlist } from '../../shared/link-wishlist/LinkWishlist';

export const Home = () => {
  const { isMobileNavOpen } = useContext(MobileNavContext);
  const { isLoading, error } = useContext(RawgContext);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className='main--home'>
          <div className='overlay' hidden={!isMobileNavOpen}></div>
          <SearchBar />
          <LinkWishlist />
          <NewPreview />
          <UpcomingPreview />
          <Popular />
        </main>
      )}
    </>
  );
};
