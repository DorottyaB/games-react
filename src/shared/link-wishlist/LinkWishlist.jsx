import { Link } from 'react-router-dom';
import './link-wishlist.css';

export const LinkWishlist = () => {
  return (
    <Link to='/wishlist' className='wishlist-link-container' title='Wishlist' aria-label='wishlist'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='34'
        height='34'
        fill='#e57c5a'
        viewBox='0 0 256 256'
      >
        <path d='M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z'></path>
      </svg>
      <span>Go to Wishlist</span>
    </Link>
  );
};
