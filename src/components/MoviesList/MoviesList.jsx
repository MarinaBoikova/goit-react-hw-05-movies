import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, original_title, original_name }) => (
          <li className={s.movieItem} key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
              className={s.movieLink}
            >
              <p> {original_title ? original_title : original_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
