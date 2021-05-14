//модули
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

//компоненты
import Form from '../components/CommonComponents/Form';
import MoviesList from '../components/MoviesList';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery, currentPage } = this.state;
      searchMovies({ searchQuery, currentPage }).then(({ data }) => {
        this.setState({ movies: data.results });
      });
    }
  }

  submitFormHandler = query => {
    if (query === '') return;
    this.setState({ searchQuery: query, currentPage: 1, movies: [] });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <Form onSubmit={this.submitFormHandler} />
        <MoviesList movies={movies} matchUrl={match.url} />
      </>
    );
  }
}

export default MoviesPage;
