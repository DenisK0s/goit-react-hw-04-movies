//модули
// import PropTypes from 'prop-types';

//компоненты
import Navigation from '../Navigation';
import Container from '../CommonComponents/Container';

//cтили
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
