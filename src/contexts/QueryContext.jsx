import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const QueryContext = createContext();

// eslint-disable-next-line react/prop-types
export const QueryProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData(query) {
      try {
        const response = await axios.request(`https://api.rawg.io/api/${query}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // getData('genres/3');
    // getData(
    //   'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-04-01,2023-12-31&ordering=-added&page_size=6'
    // );
  }, []);

  return <QueryContext.Provider value={{ data }}>{children}</QueryContext.Provider>;
};

// Endpoints
//new: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-03-30,2023-04-30&ordering=-added&page_size=2'
// platform ids:
//   pc: 4
//   ps: 187, 18, 16, 15, 27, 19, 17
//   xbox: 1, 186, 14, 80
//   nintendo: 7, 8, 9, 13, 83
//   mac: 5
//   linux: 6
// platforms?key=a3ed942ec1654e64a8ac9b99dc049dcc&platforms=18,1,7
// popular: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2022-01-01,2023-04-30&ordering=-rating&page_size=6'
// coming: 'games?key=a3ed942ec1654e64a8ac9b99dc049dcc&dates=2023-04-01,2023-12-31&ordering=-added&page_size=6'
// by genre: 'genres?key=a3ed942ec1654e64a8ac9b99dc049dcc' -> .map(games)
