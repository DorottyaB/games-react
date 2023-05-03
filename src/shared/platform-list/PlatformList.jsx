/* eslint-disable react/prop-types */
import { PCLogo } from '../platform-logos/PCLogo';
import { PlaystationLogo } from '../platform-logos/PlaystationLogo';
import { XboxLogo } from '../platform-logos/XboxLogo';
import { LinuxLogo } from '../platform-logos/LinuxLogo';
import { MacOSLogo } from '../platform-logos/MacOSLogo';
import { NintendoLogo } from '../platform-logos/NintendoLogo';
import './platform-list.css';

export const PlatformList = ({ platforms }) => {
  const logos = [
    {
      name: 'pc',
      component: <PCLogo key='1' />,
    },
    {
      name: 'playstation',
      component: <PlaystationLogo key='2' />,
    },
    {
      name: 'xbox',
      component: <XboxLogo key='3' />,
    },
    {
      name: 'macos',
      component: <MacOSLogo key='4' />,
    },
    {
      name: 'linux',
      component: <LinuxLogo key='5' />,
    },
    {
      name: 'nintendo',
      component: <NintendoLogo key='6' />,
    },
  ];

  return (
    <div className='platform-list-container'>
      {platforms &&
        platforms.map(el => {
          return logos.map(logo => {
            if (logo.name === el.platform.slug) {
              return logo.component;
            }
          });
        })}
    </div>
  );
};
