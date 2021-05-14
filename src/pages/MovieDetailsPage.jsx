//модули
import { Component } from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

//либы
// import classnames from 'classnames';

//компоненты
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Button from '../components/CommonComponents/Button';
import MovieCard from '../components/MovieCard';
import MovieExtraInfoTabs from '../components/MovieExtraInfoTabs';

//стили
// import styles from './MovieDetailsPage.module.css';

//настройки
import routes from '../routes';

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
    this.getMovieDetails(movieId);
  }

  getMovieDetails = movieId => {
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
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    console.log(location.state.from);

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push(routes.home);

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      posterPath,
      title,
      genres,
      voteAverage,
      overview,
    } = this.state.movieDetails;

    const posterPathString = `${apiSettings.POSTER_BASE_URL + posterPath}`;

    const { match } = this.props;

    return (
      <>
        <Button clickHandler={this.handleGoBack}>Go back</Button>
        <MovieCard
          posterPath={posterPath}
          title={title}
          genres={genres}
          voteAverage={voteAverage}
          overview={overview}
          posterPathString={posterPathString}
        />
        <MovieExtraInfoTabs />

        {this.state.movieCast !== null && (
          <Route
            path={`${match.path}/cast`}
            render={props => <Cast {...props} cast={this.state.movieCast} />}
          />
        )}
        {this.state.movieReviews !== null && (
          <Route
            path={`${match.path}/reviews`}
            render={props => {
              return <Reviews {...props} reviews={this.state.movieReviews} />;
            }}
          />
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
