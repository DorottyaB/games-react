export const Spinner = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        gridArea: '2 / 2 / 3 / 3',
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width='120'
      height='120'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <g>
        <circle cx='60' cy='50' r='4' fill='#dddddd'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='95;35'
            keyTimes='0;1'
            begin='-0.41540000000000005s'
          ></animate>
          <animate
            attributeName='fill-opacity'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='0;1;1'
            keyTimes='0;0.2;1'
            begin='-0.41540000000000005s'
          ></animate>
        </circle>
        <circle cx='60' cy='50' r='4' fill='#dddddd'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='95;35'
            keyTimes='0;1'
            begin='-0.2046s'
          ></animate>
          <animate
            attributeName='fill-opacity'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='0;1;1'
            keyTimes='0;0.2;1'
            begin='-0.2046s'
          ></animate>
        </circle>
        <circle cx='60' cy='50' r='4' fill='#dddddd'>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='95;35'
            keyTimes='0;1'
            begin='0s'
          ></animate>
          <animate
            attributeName='fill-opacity'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='0;1;1'
            keyTimes='0;0.2;1'
            begin='0s'
          ></animate>
        </circle>
      </g>
      <g transform='translate(-15 0)'>
        <path
          d='M50 50L20 50A30 30 0 0 0 80 50Z'
          fill='#e57c5a'
          transform='rotate(90 50 50)'
        ></path>
        <path d='M50 50L20 50A30 30 0 0 0 80 50Z' fill='#e57c5a'>
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='0 50 50;45 50 50;0 50 50'
            keyTimes='0;0.5;1'
          ></animateTransform>
        </path>
        <path d='M50 50L20 50A30 30 0 0 1 80 50Z' fill='#e57c5a'>
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1.6129032258064517s'
            values='0 50 50;-45 50 50;0 50 50'
            keyTimes='0;0.5;1'
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
};
