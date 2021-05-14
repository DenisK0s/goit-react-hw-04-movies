//модули
// import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

//стили
// import styles from './MoviesList.module.css';

const MoviesList = ({ movies, match, location }) => {
  const pathCorrection = match.url === '/' ? '/movies' : match.url;
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `${pathCorrection}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);
