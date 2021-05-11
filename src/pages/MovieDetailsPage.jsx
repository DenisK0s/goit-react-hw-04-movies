//модули
import { Component } from 'react';
// import PropTypes from 'prop-types';

//стили
// import styles from './MovieDetailsPage.module.css';

//сервисы
import { fetchMovieById } from '../services/api-service';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId).then(response => console.log(response));
  }

  render() {
    // const { movieId } = this.props.match.params;
    return;
  }
}

export default MovieDetailsPage;
