import React from 'react';
import './links-sidebar.scss';
import IconLinkedIn from '../../icons/linkedin';
import IconGithub from '../../icons/github';

const LinksSideBar = () => {
  return (
    <div className="links-sidebar">
      <a
        href="https://www.linkedin.com/in/liam-swift/"
        target="_blank"
        rel="noopener noreferrer"
        className="links-sidebar__link"
      >
        <IconLinkedIn />
      </a>
      <a
        href="https://github.com/lswifty2017"
        target="_blank"
        rel="noopener noreferrer"
        className="links-sidebar__link"
      >
        <IconGithub />
      </a>
    </div>
  );
};

export default LinksSideBar;
