import React, { Component } from "react";
import PropTypes from 'prop-types'

import TextStyle from './TextStyle'

const Text = ({ children, 
                size,
                type, 
                weight, 
                nowrap }) => {

        return (
            <>
                <TextStyle
                    size={size}
                    type={type}
                    weight={weight}
                    nowrap={nowrap}
                    >
                    {children}
                </TextStyle>
            </>
        )
}

Text.propTypes = {
    children: PropTypes.node.isRequired,

    size: PropTypes.oneOf([
        'largest',
        'large',
        'big',
        'medium',
        'small',
        'smallest'
        ]).isRequired,

    type: PropTypes.oneOf([
        'inverted',
        'default',
        'primary',
        'secondary'
    ]).isRequired,

    weight: PropTypes.oneOf([
        'bold',
        'light'
    ]).isRequired,

    nowrap: PropTypes.bool
}

Text.defaultProps = {
    children: null,
    size: 'medium',
    type: 'default',
    weight: 'light',
    nowrap: false
}

export default Text;