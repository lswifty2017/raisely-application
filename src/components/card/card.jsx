import React from 'react';
import './card.scss';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__title">{title}</div>
        <div className="card__content">
          <ul>
            {content.map(p => {
              return <li>{p}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
