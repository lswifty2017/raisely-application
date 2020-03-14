import React from 'react';
import './nav-bar.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Router>
        <Link className="nav-bar__logo" to="/">
          Liam Swift
        </Link>
      </Router>
    </nav>
  );
};

export default NavBar;
