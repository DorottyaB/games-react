import { PCLogo } from '../platform-logos/PCLogo';
import { PlaystationLogo } from '../platform-logos/PlaystationLogo';
import { XboxLogo } from '../platform-logos/XboxLogo';
import { LinuxLogo } from '../platform-logos/LinuxLogo';
import { MacOSLogo } from '../platform-logos/MacOSLogo';
import { NintendoLogo } from '../platform-logos/NintendoLogo';
import './platform-list.css';

// eslint-disable-next-line react/prop-types
export const PlatformList = ({ platforms }) => {
  return (
    <div className='platform-list-container'>
      <PlaystationLogo />
      <XboxLogo />
      <PCLogo />
      {/* <LinuxLogo />
      <MacOSLogo />
      <NintendoLogo /> */}
    </div>
  );
};
