import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // const match = useRouteMatch();
  // console.log(match);
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            {/* <Link to={`${match.url}/${id}`}> */}
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
