//модули
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//компоненты
import Form from '../components/CommonComponents/Form';

//сервисы
import { searchMovies } from '../services/api-service';

//стили
// import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    currentPage: 1,
  };

  componentDidUpdate() {
    const { searchQuery, currentPage } = this.setState;
    const requestedMovies = searchMovies({ searchQuery, currentPage });
    this.setState({ movies: requestedMovies });
  }

  submitFormHandler = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { movies } = this.state;
    console.dir(movies);
    return (
      <>
        <Form onSubmit={this.submitFormHandler} />
        <ul>
          {/* {movies.map(movie => {
          return <li key={}>{}</li>;
        })} */}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
