import './rating.css';

// eslint-disable-next-line react/prop-types
export const Rating = ({ rating = 0 }) => {
  return (
    <div className='rating-container'>
      {rating ? rating : 0}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='#e57c5a'
        viewBox='0 0 256 256'
      >
        <path d='M184,216a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Zm45.66-101.66-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,176H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z'></path>
      </svg>
    </div>
  );
};
