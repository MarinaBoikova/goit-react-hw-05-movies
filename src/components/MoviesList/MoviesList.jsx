import React, { useState, useEffect } from 'react';
import { fetchTrandingMovies } from '../../services/api';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(responce => {
      setMovies([...responce]);
    });
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
