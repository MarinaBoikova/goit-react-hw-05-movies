import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '60c2a1421d17d6029ad95f51c88fd7ab';

// из апишки приходит объект с свойствами -
// "page": 1,
// "results" - массив объектов

// запрос трентинговых фильмов для отображения на HomePage при загрузке страницы
const fetchTrandingMovies = () => {
  return axios
    .get(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&include_adult=false`,
    )
    .then(response => response.data.results)
    .catch(error => error);
};

const fetchMovieById = id => {
  return axios
    .get(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US&include_adult=false`,
    )
    .then(response => response.data)
    .catch(error => error);
};

const fetchCastById = id => {
  return axios
    .get(
      `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&include_adult=false`,
    )
    .then(response => response.data)
    .catch(error => error);
};

const fetchReviewsById = id => {
  return axios
    .get(`${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data)
    .catch(error => error);
};

const fetchQuerySearch = query => {
  return axios
    .get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`,
    )
    .then(response => response.data.results)
    .catch(error => error);
};

export {
  fetchTrandingMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
  fetchQuerySearch,
};
