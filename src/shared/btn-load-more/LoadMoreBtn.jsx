import './load-more-btn.css';

// eslint-disable-next-line react/prop-types
export const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className='load-more-btn'>
      Load more
    </button>
  );
};
