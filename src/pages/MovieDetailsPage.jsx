//модули
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

//компоненты
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

//стили
import styles from './MovieDetailsPage.module.css';

//сервисы
import {
  fetchMovieById,
  fetchMovieCast,
  fetchMovieRewiews,
  apiSettings,
} from '../services/api-service';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {
      posterPath: null,
      title: null,
      genres: null,
      voteAverage: null,
      overview: null,
    },
    movieCast: null,
    movieReviews: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId)
      .then(({ data }) => {
        const genresString = data.genres.map(genre => genre.name).join(',');
        return {
          posterPath: data.poster_path,
          title: data.title,
          genres: genresString,
          voteAverage: data.vote_average,
          overview: data.overview,
        };
      })
      .then(responce => {
        this.setState({ movieDetails: { ...responce } });
        return fetchMovieCast(movieId);
      })
      .then(({ data }) => {
        this.setState({ movieCast: data.cast });
        return fetchMovieRewiews(movieId);
      })
      .then(({ data }) => {
        this.setState({ movieReviews: data.results });
      });
  }

  render() {
    const {
      posterPath,
      title,
      genres,
      voteAverage,
      overview,
    } = this.state.movieDetails;

    const posterPathString = `${apiSettings.POSTER_BASE_URL + posterPath}`;

    const { path } = this.props.match;

    return (
      <>
        <div className={styles.movieCard}>
          <div className={styles.movieCardImgInner}>
            <img
              src={posterPathString}
              alt={title}
              className={styles.movieCardImg}
            />
          </div>
          <div className={styles.movieCardDescription}>
            <h1 className={styles.movieCardTitle}>{title}</h1>
            <p className={styles.movieCardScore}>
              User Score : {Math.floor(voteAverage * 10)} %
            </p>
            <h2 className={styles.movieCardOverview}>Overview</h2>
            <p className={styles.movieCardOverviewDescr}>{overview}</p>
            <h3 className={styles.movieCardGenres}>Genres</h3>
            <p className={styles.movieCardGenresDescr}>{genres}</p>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="/movies/:movieId/cast">Сast</Link>
            </li>
            <li>
              <Link to="/movies/:movieId/reviews">Reviews</Link>
            </li>
          </ul>
        </div>

        <Route
          path={`${path}/cast`}
          render={props => <Cast {...props} cast={this.state.movieCast} />}
        />
        <Route
          path={`${path}/reviews`}
          render={props => (
            <Reviews {...props} reviews={this.state.movieReviews} />
          )}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
