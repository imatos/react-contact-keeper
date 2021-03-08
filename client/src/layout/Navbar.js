import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import contactContext from '../context/contact/ContactContext';

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { clearContacts } = useContext(contactContext);

  const logoutHandler = () => {
    logout();
    clearContacts();
  };

  const privateRoutes = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={logoutHandler}>
          <i className="fas fa-sign-out-alt">
            {' '}
            <span className="hide-sm">Logout</span>
          </i>
        </a>
      </li>
    </>
  );

  const publicRoutes = (
    <>
      <li>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? privateRoutes : publicRoutes}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
