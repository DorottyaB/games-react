import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

export const QueryContext = createContext();

const API_KEY = 'a3ed942ec1654e64a8ac9b99dc049dcc';

const today = new Date();
const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
const startDate = formatDate(thirtyDaysAgo);
const endDate = formatDate(today);

const dateRange = `${startDate},${endDate}`;

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// async function getData(query, setState) {
//   try {
//     const response = await axios.get(`https://api.rawg.io/api/${query}`);
//     setState(response.data.results);
//   } catch (error) {
//     console.error(error);
//   }
// }

// eslint-disable-next-line react/prop-types
export const QueryProvider = ({ children }) => {
  const [newGames, setNewGames] = useState();
  const [popularGames, setPopularGames] = useState();
  const [comingGames, setComingGames] = useState();

  const fetchData = useCallback((query, setState) => {
    axios
      .get(`https://api.rawg.io/api/${query}`)
      .then(response => {
        setState(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchData(
      `games?key=${API_KEY}&dates=${dateRange}&ordering=-added&page_size=2&platforms=4,187,18,16,15,27,19,17,1,186,14,80,5,6,7,8,9,13,83`,
      setNewGames
    );
    console.log(newGames);
    fetchData(
      `games?key=${API_KEY}&dates=2013-01-01,${endDate}&ordering=-rating&platforms=4,187,18,16,15,27,19,17,1,186,14,80,5,6,7,8,9,13,83`,
      setPopularGames
    );
    console.log(popularGames);
    fetchData(
      `games?key=${API_KEY}&dates=${endDate},2023-12-31&ordering=-added&page_size=7&platforms=4,187,18,16,15,27,19,17,1,186,14,80,5,6,7,8,9,13,83`,
      setComingGames
    );
    console.log(comingGames);
    // getData('genres/3');
  }, []);

  return (
    <QueryContext.Provider value={{ newGames, popularGames, comingGames }}>
      {children}
    </QueryContext.Provider>
  );
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
// platforms?key=a3ed942ec1654e64a8ac9b99dc049dcc&platforms=18,1,7
// popular: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2022-01-01,2023-04-30&ordering=-rating&page_size=6'
// coming: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-04-01,2023-12-31&ordering=-added&page_size=6'
// by genre: 'genres?key=a3ed942ec1654e64a8ac9b99dc049dcc' -> .map(games)
