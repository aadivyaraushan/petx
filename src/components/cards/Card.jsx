import React from 'react';
import "./Card.scss"

const Card = ({ src, alt, content, width='300px', height='400px' }) => {
  return <div className='Card'>
      <div className="header">
          <img src={src} alt={alt} style={{ width: width, height: 'calc(0.5 * ' + height + ')'}} />
      </div>
      <div className="body" style={{ width: width, height: 'calc(0.5 * ' + height + ')'}}>
          <p>{content}</p>
      </div>
  </div>;
};

export default Card;
