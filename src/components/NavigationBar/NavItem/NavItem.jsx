import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from '../NavigationBar.module.css';

const NavItem = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      style={{ display: 'block', marginBottom: 10 }}
      activeClassName={s.activePage}
      exact
    >
      {name}
    </NavLink>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default NavItem;
