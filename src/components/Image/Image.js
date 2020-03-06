import React from 'react';
import PropTypes from 'prop-types';

import { ImageStyle } from './ImageStyle'



function Image({
    children, size, src, borderRadius, width, height, withFilter, fullScreen
}) {

  return (
    <ImageStyle 
    withFilter={withFilter} 
    height={height} 
    width={width} 
    src={src} 
    size={size} 
    borderRadius={borderRadius}
    fullScreen={fullScreen}
    >
        { children }
    </ImageStyle>
  );
}
Image.propTypes = {
	children: PropTypes.node,
    size: PropTypes.string,
    src: PropTypes.string,
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    withFilter: PropTypes.bool,
    fullScreen: PropTypes.bool
}

Image.defaultProps = {
    children: null
}

export default Image;   