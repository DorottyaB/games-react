import { createContext, useState } from 'react';

export const MobileNavContext = createContext();

// eslint-disable-next-line react/prop-types
export const MobileNavProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <MobileNavContext.Provider value={{ isMobileNavOpen, setIsMobileNavOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};
