import React, { useState, useEffect } from 'react';
import { fetchTrandingMovies } from '../../services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(responce => {
      setMovies([...responce]);
    });
  }, []);
  return (
    <>
      <h1 style={{ fontSize: '20px', marginBottom: '10px' }}>Tranding today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
