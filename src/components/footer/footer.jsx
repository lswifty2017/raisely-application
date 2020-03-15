import React from 'react';
import './footer.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <div className="footer">
      &copy; Liam Swift 2020
      <Link onClick={scrollToTop} className="footer__top-link">
        Back To Top
        <img
          src="https://img.icons8.com/small/16/000000/long-arrow-up.png"
          style={{ width: '15px', height: '15px' }}
          alt="up-arrow"
        />
      </Link>
    </div>
  );
};

export default Footer;
