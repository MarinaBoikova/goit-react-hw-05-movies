import HomePage from 'pages/HomePage/HomePage.jsx';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage.jsx';
import MoviesPage from 'pages/MoviesPage/MoviesPage.jsx';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const App = () => {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Route>
      </Switch>
    </div>
  );
};

// Сразу открывается Home
// h1 - Trending today
// Список ссылок с названий трендинговых фильмов
// Ссылка - открывает какточку с фильмом и информации о нем. Еще кнопка Go back
//......................
// Movies - форма с инпутом и кнопка search

export default App;
