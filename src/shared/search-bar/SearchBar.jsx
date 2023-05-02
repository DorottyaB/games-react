import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import './search-bar.css';

export const SearchBar = () => {
  const { width } = useWindowDimensions();

  return (
    <div className='search-bar-container'>
      <input type='search' name='search' id='search' placeholder='Search video games...' />
      <button type='submit' className='search-btn'>
        <div className='svg-wrapper-1'>
          <div className='svg-wrapper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='#f5f5f5'
              viewBox='0 0 256 256'
            >
              <path d='M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z'></path>
            </svg>
          </div>
        </div>
        {width >= 1024 && <span>Search</span>}
      </button>
    </div>
  );
};
