/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { WishlistContext } from '../../contexts/WishlistContext';
import './add-to-wishlist-btn.css';

export const AddToWishlistBtn = ({ game }) => {
  const { addToWishlist, checkIfAdded } = useContext(WishlistContext);
  const [isAdded, setIsAdded] = useState(() => checkIfAdded(game.slug));

  const handleClick = game => {
    addToWishlist(game);
    setIsAdded(true);
  };

  return (
    <div className='add-to-wishlist-btn-container'>
      <button disabled={isAdded} onClick={() => handleClick(game)}>
        {isAdded ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            fill='#e57c5a'
            viewBox='0 0 256 256'
          >
            <path d='M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z'></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            fill='#e57c5a'
            viewBox='0 0 256 256'
          >
            <path d='M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z'></path>
          </svg>
        )}
      </button>
      <p style={{ color: isAdded ? '#e57c5a' : '#dddddd' }}>
        {isAdded ? 'Wishlisted' : 'Add to Wishlist'}
      </p>
    </div>
  );
};
