import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm  mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            className='logo'
            src={Logo}
            alt="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/tournament-panel">
                Tournament Panel
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;