//модули
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//компоненты
import Container from './components/CommonComponents/Container';
import Header from './components/Header';
import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
