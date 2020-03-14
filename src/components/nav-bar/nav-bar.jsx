import React from 'react';
import './nav-bar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar__logo" onClick={scrollToTop}>
        Liam Swift
      </Link>
    </nav>
  );
};

export default NavBar;
