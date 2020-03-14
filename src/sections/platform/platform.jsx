import React from 'react';
import './platform.scss';
import uberLogo from '../../images/uber-logo.png';

const Platform = ({ sectionID }) => {
  return (
    <div className="platform" id={sectionID}>
      <h2>Effective Platform</h2>
      <div className="platform__wrapper">
        <div className="platform__content">
          <p>
            Uber solves the problem of cost and time effective transport for
            individuals by offering a platform that allows people to share and
            use services of each other. Coupled with a strong review/rating
            system, uber keeps people accountable to high levels of service and
            co-operation.
          </p>
          <p>
            Uber also offers an ease of transport that was unprecedented. Simply
            by entering a location, a user will have accurate time and cost
            estimates from the get go. It's this simplicity that gives Uber a
            significant edge in the market.
          </p>
          <p>
            I wouldn't change much - I think it's quite a brilliant platform.
          </p>
        </div>
        <div className="platform__image">
          <img src={uberLogo} alt="uber-logo" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
