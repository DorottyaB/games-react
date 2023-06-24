import { createContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
  const [games, setGames] = useState(JSON.parse(localStorage.getItem('games')) || []);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
    console.log(games);
  }, [games]);

  const addToWishlist = game => {
    const data = {
      id: game.id,
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

  const removeGame = slug => {
    const filteredGames = games.filter(game => game.slug !== slug);
    setGames(filteredGames);
  };

  return (
    <WishlistContext.Provider value={{ games, addToWishlist, checkIfAdded, removeGame }}>
      {children}
    </WishlistContext.Provider>
  );
};
