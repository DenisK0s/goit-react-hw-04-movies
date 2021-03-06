//модули
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

//компоненты

//стили
import styles from './Navigation.module.css';

//настройки
import routs from '../../routes';

const navLinksData = [
  { path: `${routs.home}`, name: 'Home', status: true },
  { path: `${routs.movies}`, name: 'Movies' },
];

const NavLinkItem = ({ to, linkStatus, children }) => {
  return (
    <NavLink
      to={to}
      exact
      className={styles.NavLinkItem}
      activeClassName={styles.NavLinkItemActive}
    >
      {children}
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.NavigationList}>
        {navLinksData.map(({ path, name, status }) => {
          return (
            <NavLinkItem key={name} to={path} linkStatus={status}>
              {name}
            </NavLinkItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
