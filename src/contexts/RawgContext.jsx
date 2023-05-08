/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

export const RawgContext = createContext();

const API_KEY = 'a3ed942ec1654e64a8ac9b99dc049dcc';

// const today = new Date();
// const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
// const startDate = formatDate(thirtyDaysAgo);
// const endDate = formatDate(today);

// const dateRange = `${startDate},${endDate}`;

// function formatDate(date) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// }

// async function getData(query, setState) {
//   try {
//     const response = await axios.get(`https://api.rawg.io/api/${query}`);
//     setState(response.data.results);
//   } catch (error) {
//     console.error(error);
//   }
// }

// eslint-disable-next-line react/prop-types
export const RawgProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [recentGames, setRecentGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [searchedGame, setSearchedGame] = useState(null);
  const [filteredByGenre, setFilteredByGenre] = useState([]);
  const [filteredByPlatform, setFilteredByPlatform] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // RECENT GAMES
  useEffect(() => {
    const fetchData = async () => {
      try {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0]; // get the date 30 days ago in the format "yyyy-mm-dd"
        const params = `&dates=${thirtyDaysAgo},${
          new Date().toISOString().split('T')[0]
        }&ordering=-added&page_size=39&parent_platforms=1,2,3,5,6,7`;
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        setRecentGames(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
    },${futureDate}&ordering=-added&page_size=39&parent_platforms=1,2,3,5,6,7`;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        setUpcomingGames(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
        if (currentPage > 1) {
          setSortedGames(prevGames => [...prevGames, ...data.results]);
        } else {
          setSortedGames(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const searchGame = async searchParam => {
    try {
      const params = `&search=${searchParam}`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      setSearchedGame(data.results[0] || null);
    } catch (error) {
      console.error(error);
    }
  };

  const filterByGenre = async genre => {
    try {
      const params = `&genres=${genre}`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      setFilteredByGenre(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const filterByPlatform = async platform => {
    try {
      const params = `&platforms=${platform}`;
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);
      setFilteredByPlatform(data.results);
    } catch (error) {
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
    filterByGenre,
    filterByPlatform,
    searchGame,
    setCurrentPage,
  };
  // const [newGames, setNewGames] = useState();
  // const [popularGames, setPopularGames] = useState();
  // const [comingGames, setComingGames] = useState();

  // const fetchData = useCallback((query, setState) => {
  //   axios
  //     .get(`https://api.rawg.io/api/${query}`)
  //     .then(response => {
  //       setState(response.data.results);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData(
  //     `games?key=${API_KEY}&dates=${dateRange}&ordering=-added&parent_platforms=1,2,3,5,6,7`,
  //     setNewGames
  //   );
  //   console.log(newGames);
  //   fetchData(
  //     `games?key=${API_KEY}&dates=2013-01-01,${endDate}&ordering=-metacritic&page_size=40&parent_platforms=1,2,3,5,6,7`,
  //     setPopularGames
  //   );
  //   console.log(popularGames);
  //   fetchData(
  //     `games?key=${API_KEY}&dates=${endDate},2023-12-31&ordering=released&parent_platforms=1,2,3,5,6,7`,
  //     setComingGames
  //   );
  //   console.log(comingGames);
  //   getData('genres/3');
  // }, []);

  return <RawgContext.Provider value={value}>{children}</RawgContext.Provider>;
};

// Endpoints
//new: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-03-30,2023-04-30&ordering=-added&page_size=2'
// platform ids:
//   pc: 4
//   ps: 187,18,16,15,27,19,17
//   xbox: 1,186,14,80
//   nintendo: 7,8,9,13,83
//   mac: 5
//   linux: 6
// platforms=4,187,18,16,15,27,19,17,1,186,14,80,5,6,7,8,9,13,83
// platforms?key=a3ed942ec1654e64a8ac9b99dc049dcc&platforms=18,1,7
// parent_platforms ids: 1,2,3,5,6,7
// popular: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2022-01-01,2023-04-30&ordering=-rating&page_size=6'
// coming: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-04-01,2023-12-31&ordering=-added&page_size=6'
// by genre: 'genres?key=a3ed942ec1654e64a8ac9b99dc049dcc' -> .map(games)
