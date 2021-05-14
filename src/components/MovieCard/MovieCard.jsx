//модули
// import PropTypes from 'prop-types';

//стили
import styles from './MovieCard.module.css';

const MovieCard = ({
  posterPath,
  posterPathString,
  title,
  genres,
  voteAverage,
  overview,
}) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCardImgInner}>
        {posterPath && (
          <img
            src={posterPathString}
            alt={title}
            className={styles.movieCardImg}
          />
        )}
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
  );
};

export default MovieCard;
