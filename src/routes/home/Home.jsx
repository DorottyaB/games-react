import { ComingSoonPreview } from '../../ui/coming-soon-preview/ComingSoonPreview';
import { Footer } from '../../shared/footer/Footer';
import { NewPreview } from '../../ui/new-preview/NewPreview';
import { Popular } from '../../ui/popular/Popular';
import './home.css';

export const Home = () => {
  return (
    <>
      <main>
        <NewPreview />
        <ComingSoonPreview />
        <Popular />
      </main>
      <Footer />
    </>
  );
};
