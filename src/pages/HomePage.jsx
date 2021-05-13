//модули
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    fetchPopularMovies().then(({ data }) =>
      this.setState({ movies: data.results }),
    );
  }

  render() {
    const { movies } = this.state;
    // const { match } = this.props;
    return (
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HomePage;
