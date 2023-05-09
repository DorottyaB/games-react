/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_RAWG_KEY;

export const RawgContext = createContext();

// eslint-disable-next-line react/prop-types
export const RawgProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [recentGames, setRecentGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [searchedGame, setSearchedGame] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // RECENT GAMES
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0]; // get the date 30 days ago in the format "yyyy-mm-dd"
        const params = `&dates=${thirtyDaysAgo},${
          new Date().toISOString().split('T')[0]
        }&ordering=-added&page_size=18&page=${currentPage}&parent_platforms=1,2,3,5,6,7`;
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        if (currentPage > 1) {
          setRecentGames(prevGames => [...prevGames, ...data.results]);
        } else {
          setRecentGames(data.results);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage]);

  // UPCOMING GAMES
  useEffect(() => {
    function getDate365DaysFromNow() {
      const currentDate = new Date();
      const futureDate = new Date(currentDate.getTime() + 365 * 24 * 60 * 60 * 1000);
      const year = futureDate.getFullYear();
      const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
      const day = futureDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    const futureDate = getDate365DaysFromNow();
    const params = `&dates=${
      new Date().toISOString().split('T')[0]
    },${futureDate}&ordering=-added&page=${currentPage}&page_size=18&parent_platforms=1,2,3,5,6,7`;
    const fetchData = async () => {
      try {
        setError(null);
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        if (currentPage > 1) {
          setUpcomingGames(prevGames => [...prevGames, ...data.results]);
        } else {
          setUpcomingGames(data.results);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage]);

  // POPULAR GAMES
  useEffect(() => {
    function getDate10YearsAgo() {
      const currentDate = new Date();
      const pastDate = new Date(currentDate.getTime() - 10 * 365 * 24 * 60 * 60 * 1000);
      const year = pastDate.getFullYear();
      const month = (pastDate.getMonth() + 1).toString().padStart(2, '0');
      const day = pastDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    const pastDate = getDate10YearsAgo();
    const params = `&dates=${pastDate},${
      new Date().toISOString().split('T')[0]
    }&ordering=-metacritic&page_size=18&page=${currentPage}&parent_platforms=1,2,3,5,6,7`;
    const fetchData = async () => {
      try {
        setError(null);
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        if (currentPage > 1) {
          setSortedGames(prevGames => [...prevGames, ...data.results]);
        } else {
          setSortedGames(data.results);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const searchGame = async searchParam => {
    try {
      setError(null);
      setIsLoading(true);
      const params = `&search=${searchParam}&ordering=-metacritic&page_size=9&search_exact=true&search_precise=true`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      setSearchedGame(data.results || null);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const filterByGenre = async genre => {
    try {
      setError(null);
      setIsLoading(true);
      const params = `&genres=${genre}&ordering=-added&page_size=18&page=${currentPage}`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      if (currentPage > 1) {
        setGames(prevGames => [...prevGames, ...data.results]);
      } else {
        setGames(data.results);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const filterByPlatform = async platform => {
    try {
      setError(null);
      setIsLoading(true);
      const params = `&parent_platforms=${platform}&ordering=-added&page_size=18&page=${currentPage}`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      if (currentPage > 1) {
        setGames(prevGames => [...prevGames, ...data.results]);
      } else {
        setGames(data.results);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const value = {
    games,
    recentGames,
    upcomingGames,
    sortedGames,
    searchedGame,
    currentPage,
    isLoading,
    error,
    filterByGenre,
    filterByPlatform,
    searchGame,
    setCurrentPage,
  };

  return <RawgContext.Provider value={value}>{children}</RawgContext.Provider>;
};
