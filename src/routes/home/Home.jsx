import { ComingPreview } from '../../components/coming-preview/ComingPreview';
import { Footer } from '../../components/footer/Footer';
import { NewPreview } from '../../components/new-preview/NewPreview';
import { Popular } from '../../components/popular/Popular';
import './home.css';

export const Home = () => {
  return (
    <>
      <main>
        <NewPreview />
        <ComingPreview />
        <Popular />
      </main>
      <Footer />
    </>
  );
};
