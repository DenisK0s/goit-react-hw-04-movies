import axios from 'axios';

export const apiSettings = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'fbb221b42ea4016443071401e27ac9a9',
  POSTER_BASE_URL: 'https://image.tmdb.org/t/p/w500',
};

axios.defaults.baseURL = apiSettings.BASE_URL;
axios.defaults.params = {
  api_key: apiSettings.API_KEY,
};

export const fetchMovieById = async id => {
  try {
    const result = await axios.get(`movie/${id}`);
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const fetchMovieCast = async id => {
  try {
    const result = await axios.get(`movie/${id}/credits`);
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const fetchMovieRewiews = async id => {
  try {
    const result = await axios.get(`movie/${id}/reviews`);
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};

export const fetchPopularMovies = async () => {
  try {
    const result = await axios.get('/trending/movie/day');
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
    const result = await axios.get('/search/movie', {
      params: { query: `${query}`, page: `${page}` },
    });
    return result;
  } catch (error) {
    console.log(`${error}`);
  }
};
