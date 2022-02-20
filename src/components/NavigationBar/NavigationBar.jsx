// import PropTypes from 'prop-types';
import s from './NavigationBar.module.css';
import NavItem from './NavItem/NavItem';

const NavigationBar = () => (
  <>
    <nav className={s.navigationBar}>
      <NavItem path="/" name={'Home'} />
      <NavItem path="/movies" name={'Movies'} />
    </nav>
  </>
);
export default NavigationBar;
