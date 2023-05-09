import './error.css';

export const Error = () => {
  return (
    <div className='error-container'>
      Oh no! Something went wrong.
      <button className='btn-refresh' onClick={() => window.location.reload(false)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='#f5f5f5'
          viewBox='0 0 256 256'
        >
          <path d='M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z'></path>
        </svg>
        Refresh
      </button>
    </div>
  );
};
