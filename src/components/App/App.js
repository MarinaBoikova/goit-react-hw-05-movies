import { lazy, Suspense } from 'react';
import Container from 'commons/Container/Caontainer.jsx';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import Spinner from '../../commons/Spinner/Spinner';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import(
    '../../pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviePage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => {
  return (
    <Container>
      <div className="App">
        <NavigationBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
};

// Сразу открывается Home
// h1 - Trending today
// Список ссылок с названий трендинговых фильмов
// Ссылка - открывает какточку с фильмом и информации о нем. Еще кнопка Go back
//......................
// Movies - форма с инпутом и кнопка search

export default App;
