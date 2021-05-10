import axios from 'axios';

const BASE_URL = 'https://developers.themoviedb.org/3';
const API_KEY = 'fbb221b42ea4016443071401e27ac9a9';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
};

// const fetchData = async ({ searchQuery: q, currentPage: page }) => {
//   const result = await axios.get;
//   return axios
//     .get('', {
//       params: { q, page },
//     })
//     .then(({ data }) => {
//       console.log(data);
//       return data;
//     });
// };

export const fetchPopularMovies = async () => {
  try {
    const result = await axios.get('/trending', {
      params: { media_type: 'movie', time_window: 'day' },
    });
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const searchMovies = async ({
  searchQuery: query,
  currentPage: page,
}) => {
  try {
    const result = await axios.get('/search/company', {
      params: { query: `${query}`, page: `${page}` },
    });
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};
