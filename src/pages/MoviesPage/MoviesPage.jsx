import { useState, useEffect, useRef } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchQuerySearch } from 'services/api';
import * as storage from '../../services/localStorage';

const STORAGE_KEY = 'movies';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [savedQuery, setsavedQuery] = useState(storage.get(STORAGE_KEY) ?? '');

  const inputRef = useRef(null); //!фокус
  useEffect(() => {
    inputRef.current.focus(); //!фокус
  }, []);

  useEffect(() => {
    storage.save(STORAGE_KEY, savedQuery);
    setQuery(savedQuery);

    if (savedQuery.trim() === '') {
      return;
    }

    fetchQuerySearch(savedQuery).then(setMovies);
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setsavedQuery(query);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setQuery(e.target.value)}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Input movie name..."
            ref={inputRef}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviePage;
