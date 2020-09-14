import React from 'react';
import PropTypes from 'prop-types';

import './avatar1.css';

const Avatar1 = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="avatar1"/>
  );
}

Avatar1.propTypes = {
  src: PropTypes.string.isRequired,
}


export default Avatar1;