import { Link } from 'react-router-dom';
import './see-all-btn.css';

// eslint-disable-next-line react/prop-types
export const SeeAllBtn = ({ path }) => {
  return (
    <Link to={path} className='see-all-btn'>
      See All
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='#f5f5f5'
        viewBox='0 0 256 256'
      >
        <path d='M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z'></path>
      </svg>
    </Link>
  );
};
