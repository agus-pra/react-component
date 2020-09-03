import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="avatar"/>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
}


export default Avatar;