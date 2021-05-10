//модули
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//стили
// import styles from './HomePage.module.css';

//сервисы
import { fetchPopularMovies } from '../services/api-service';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const popularMovies = fetchPopularMovies();
    this.setState({ movies: popularMovies });
  }

  render() {
    const { movies } = this.state;
    console.dir(movies);
    return (
      <ul>
        {/* {movies.map(movie => {
          return <li key={}>{}</li>;
        })} */}
      </ul>
    );
  }
}

export default HomePage;
