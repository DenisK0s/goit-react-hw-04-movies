//модули
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//стили
// import styles from './MovieExtraInfoTabs.module.css';

//настройки
import routs from '../../routes';

const MovieExtraInfoTabs = () => {
  return (
    <div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={routs.cast}>Сast</Link>
        </li>
        <li>
          <Link to={routs.reviews}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieExtraInfoTabs;
