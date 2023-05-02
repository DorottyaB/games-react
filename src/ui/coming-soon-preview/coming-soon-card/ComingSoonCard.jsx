import { Link } from 'react-router-dom';
import '../../styles.css';
import img1 from '../../../assets/gollum.png';

export const ComingSoonCard = () => {
  return (
    <div className='coming-soon-card-container'>
      <div className='card-img-container'>
        <img src={img1} height='115' alt='' />
      </div>
      <Link to='' className='link-title'>
        The Lord of the Rings: Gollum
      </Link>
      <p className='date'>Released on 25/5/2023</p>
    </div>
  );
};
