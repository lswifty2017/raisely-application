import React from 'react';
import './next-button.scss';
import IconDownArrow from '../../icons/down-arrow';
import { Link } from 'react-scroll';

const NextButton = ({ linkId }) => {
  return (
    <Link
      className="next-button"
      to={linkId}
      smooth={true}
      offset={-30}
      duration={1000}
    >
      <IconDownArrow />
    </Link>
  );
};

export default NextButton;
