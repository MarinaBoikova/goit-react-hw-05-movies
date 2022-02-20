import { lazy, Suspense } from 'react';
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

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleOnClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button
            onClick={handleOnClick}
            style={{
              width: '100px',
              height: '25px',
              background: '#d8e7ec',
              marginBottom: '10px',
            }}
          >
            Go back
          </button>
          {movie.poster_path && (
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          )}
          <div className={s.contentWrap}>
            {' '}
            <h2 className={s.titleMovie}>
              {movie.original_title || movie.original_name}
            </h2>
            <span>User Score : </span>
            <span> {movie.vote_average * 10} %</span>
            <h2 className={s.subtitle}>Owerviev</h2>
            <p className={s.description}>{movie.overview}</p>
            <h2 className={s.titleGenres}>Genres</h2>
            {/* {console.log(movie?.genres?.map(genre => genre.name).join(' | '))} */}
            <p>{movie?.genres?.map(genre => genre.name).join(' | ')}</p>
          </div>
          <h2 className={s.titleAdditional}> Additional information</h2>
          <nav className={s.navDetailsWrap}>
            <NavLink
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
