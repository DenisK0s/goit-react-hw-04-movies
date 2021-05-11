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
    return (
      <>
        <Form onSubmit={this.submitFormHandler} />
        <ul>
          {movies.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
