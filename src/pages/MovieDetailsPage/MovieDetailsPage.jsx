import { lazy, Suspense } from 'react';
import Button from 'commons/Button/Button';
import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import Spinner from '../../commons/Spinner/Spinner';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  // console.log(location);
  // console.log(history);
  // const params = useParams();
  // console.log(params);
  // const match = useRouteMatch();
  // console.log(match);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleOnClick = () => {
    // history.push(location.state.from);
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <Button text="Go back" onClick={handleOnClick} />
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
            {/* {console.log(movie?.genres?.map(genre => genre.name).join(' | '))} */}
            <p>{movie?.genres?.map(genre => genre.name).join(' | ')}</p>
          </div>
          <h2> Additional information</h2>
          <nav className={s.navDetailsWrap}>
            <NavLink
              // to={`${url}/cast`}
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
              activeClassName={s.activePage}
              className={s.navDetailsLink}
            >
              Cast
            </NavLink>
            <NavLink
              // to={`${url}/reviews`}
              to={{
                pathname: `${url}/reviews`,
                state: { from: location.state.from },
              }}
              activeClassName={s.activePage}
              className={s.navDetailsLink}
            >
              Reviews
            </NavLink>
          </nav>
        </>
      )}
      {/* {/* path={`/movie/${movieId}/cast`} */}
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
