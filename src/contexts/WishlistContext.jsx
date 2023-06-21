import { createContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('games');
    localData ? setGames(JSON.parse(localData)) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
    console.log(games);
  }, [games]);

  const addToWishlist = game => {
    const data = {
      slug: game.slug,
      name: game.name,
      released: game.released,
      platforms: game.parent_platforms,
    };

    setGames([...games, data]);
  };

  const checkIfAdded = slug => {
    const foundGame = games.filter(game => game.slug === slug);
    const value = foundGame.length > 0 ? true : false;
    return value;
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, checkIfAdded }}>
      {children}
    </WishlistContext.Provider>
  );
};
