import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  // const params = useParams();
  // console.log(params);
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      <button>Go back</button>
      {movie.poster_path && (
        <img
          className={s.image}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
      )}
      <div className={s.contentWrap}>
        {' '}
        <h2>{movie.original_title || movie.original_name}</h2>
        <span>User Score : </span>
        <span> {movie.vote_average * 10} %</span>
        <h2 className={s.subtitle}>Owerviev</h2>
        <p className={s.description}>{movie.overview}</p>
        <h2>Genres</h2>
        <p>genres</p>
        {/* <p>{movie.genres.map(genre => genre.name).join(' | ')}</p> */}
      </div>

      <div>
        Additional information
        <a>Cast</a>
        <a>Rewievs</a>
      </div>
      {/* <NavLink>Cast</NavLink>

      <NavLink>Reviews</NavLink> */}
    </>
  );
};

export default MovieDetailsPage;
