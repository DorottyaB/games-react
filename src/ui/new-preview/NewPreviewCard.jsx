import { Link } from 'react-router-dom';
import { Rating } from '../../shared/rating/Rating';
import { PlatformList } from '../../shared/platform-list/PlatformList';
import '../styles.css';
import img1 from '../../assets/hogwarts-legacy.png';

export const NewPreviewCard = () => {
  return (
    <Link to='' className='preview-card-container'>
      <img src={img1} height='185' alt='' />
      <div className='info-container'>
        <h3>Hogwarts Legacy</h3>
        <Rating />
        <PlatformList platforms='' />
      </div>
    </Link>
  );
};
