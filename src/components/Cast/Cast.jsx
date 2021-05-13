//модули
// import PropTypes from 'prop-types';

//стили
import styles from './Cast.module.css';

import { apiSettings } from '../../services/api-service';

const Cast = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(person => {
        const {
          character,
          name,
          profile_path: profilePath,
          cast_id: id,
        } = person;
        const characterProfileImg = `${
          apiSettings.POSTER_BASE_URL + profilePath
        }`;
        return (
          <li key={id} className={styles.castItem}>
            <h2 className={styles.actingPart}>Character: {character}</h2>
            <img
              src={characterProfileImg}
              alt={name}
              className={styles.castImg}
            />
            <p className={styles.actorsName}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
