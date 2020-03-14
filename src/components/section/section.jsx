import React from 'react';
import './section.scss';

const Section = ({ sectionID, children }) => {
  return (
    <div className="section" id={sectionID}>
      {React.Children.map(children, child => child)}
    </div>
  );
};

export default Section;
