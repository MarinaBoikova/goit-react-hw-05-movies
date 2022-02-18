import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // const match = useRouteMatch();
  // console.log(match);
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <ul>
        {movies.map(({ id, original_title, original_name }) => (
          <li key={id}>
            {/* <Link to={`${match.url}/${id}`}> */}
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
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
