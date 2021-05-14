//модули
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

//стили
// import styles from './HomePage.module.css';

//компоненты
import MoviesList from '../components/MoviesList';

//сервисы
import { fetchPopularMovies } from '../services/api-service';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchPopularMovies().then(({ data }) =>
      this.setState({ movies: data.results }),
    );
  }

  render() {
    const { movies } = this.state;
    return <MoviesList movies={movies} />;
  }
}

export default HomePage;
