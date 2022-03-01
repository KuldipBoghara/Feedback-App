import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn
     btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  types: 'button',
  isDisabled: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  types: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default Button;
