// import PropTypes from 'prop-types';

import NavItem from './NavItem/NavItem';

const NavigationBar = () => (
  <>
    <nav>
      <NavItem path="/" name={'Home'} />
      <NavItem path="/movies" name={'Movies'} />
    </nav>
  </>
);
export default NavigationBar;
