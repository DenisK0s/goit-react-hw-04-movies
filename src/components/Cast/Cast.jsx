//модули
// import PropTypes from 'prop-types';

//стили
import styles from './Cast.module.css';

import { apiSettings } from '../../services/api-service';

const Cast = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(
        ({ character, name, profile_path: profilePath, cast_id: id }) => {
          const characterProfileImg = `${
            apiSettings.POSTER_BASE_URL + profilePath
          }`;
          return (
            <li key={id} className={styles.castItem}>
              <h2 className={styles.actingPart}>Character: {character}</h2>
              {profilePath && (
                <img
                  src={characterProfileImg}
                  alt={name}
                  className={styles.castImg}
                />
              )}
              <p className={styles.actorsName}>{name}</p>
            </li>
          );
        },
      )}
    </ul>
  );
};

export default Cast;
