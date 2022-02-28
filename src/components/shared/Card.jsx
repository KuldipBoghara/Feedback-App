import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  /*  return (
    //Conditional class
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  ); */

  return (
    //conditional Style
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#0000'
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};

export default Card;
