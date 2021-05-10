//стили
import styles from './Container.module.css';

//модули
// import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
