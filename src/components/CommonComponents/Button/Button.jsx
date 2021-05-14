//стили
import styles from './Button.module.css';

//модули
// import PropTypes from 'prop-types';

const Button = ({ children, type = 'button', clickHandler }) => (
  <button type={type} className={styles.Button} onClick={clickHandler}>
    {children}
  </button>
);

export default Button;
