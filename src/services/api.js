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

// const fetchSearchQueryMovie = query => {
//   return axios
//     .get(
//       `${BASE_URL}/3/search/movie/?key=${API_KEY}&language=en-US&query=${query}&include_adult=false`,
//     )
//     .then(response => response.data.results)
//     .catch(error => error);
// };

// const fetchByIdDetailsMovie = id => {
//   return axios
//     .get(`${BASE_URL}/3/search/movie/${id}?key=${API_KEY}&language=en-US`)
//     .then(response => response.data)
//     .catch(error => error);
// };
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const fetchMovieById = id => {
  return axios
    .get(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US&include_adult=false`,
    )
    .then(response => response.data)
    .catch(error => error);
};

// const fetchByIdDetailsMovie = id => {
//   return axios
//     .get(`${BASE_URL}/3/search/movie/${id}?key=${API_KEY}&language=en-US`)
//     .then(response => response.data.results)
//     .catch(error => error);
// };

// const fetchByIdCastMovie = id => {
//   return axios
//     .get(
//       `${BASE_URL}/3/search/movie/${id}/credits?key=${API_KEY}&language=en-US`,
//     )
//     .then(response => response.data.results)
//     .catch(error => error);
// };

// const fetchByIdReviewsMovie = id => {
//   return axios
//     .get(
//       `${BASE_URL}/3/search/movie/${id}/reviews?key=${API_KEY}&language=en-US`,
//     )
//     .then(response => response.data.results)
//     .catch(error => error);
// };

export {
  fetchTrandingMovies,
  // fetchSearchQueryMovie,
  fetchMovieById,
  // fetchByIdCastMovie,
  // fetchByIdReviewsMovie,
};
