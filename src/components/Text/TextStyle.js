import styled from 'styled-components'

const TextStyle = styled.p 
`
    margin: 0;
    font-family: 'Comfortaa', sans-serif;
    white-space: ${props => props.nowrap ? 'nowrap' : 'normal'};
    line-height: ${props => 
        props.size === 'medium' || props.size === 'small' || props.size === 'smallest' ?
        '1.5'
        :
        props.size === 'big' ?
        '1.25'
        :
        props.size === 'large'? 
        `1.25`
        :
        props.size === 'largest' &&
        '1'
    };
    font-size: ${props => 
        props.size === 'medium' ?
        '20px'
        :
        props.size === 'small' ?
        '16px'
        :
        props.size === 'smallest' ?
        '14px'
        :
        props.size === 'big' ?
        '26px'
        :
        props.size === 'large' ?
        '38px'
        :
        props.size === 'largest' &&
        '50px'
    };
    color: ${props => 
        props.type === 'default' ?
        '#404040'
        :
        props.type === 'inverted' ?
        '#FFFFFF'
        :
        props.type === 'primary' ?
        '#000'
        :
        props.type === 'secondary' &&
        '#696969'
    };
    font-weight: ${props => 
        props.weight === 'bold' ? 'bold'
        :
        props.weight === 'light' && 'regular'
    };
    @media all and (max-width: 414px) {
        font-size: ${props => 
            props.size === 'medium' ?
            '16px'
            :
            props.size === 'small' ?
            '14px'
            :
            props.size === 'smallest' ?
            '12px'
            :
            props.size === 'big' ?
            '20px'
            :
            props.size === 'large' ?
            '30px'
            :
            props.size === 'largest' &&
            '48px'
        };
    }
    @media (min-width: 1025px) and (max-width: 1680px) {
        font-size: ${props => 
            props.size === 'medium' ?
            '18px'
            :
            props.size === 'small' ?
            '14px'
            :
            props.size === 'smallest' ?
            '10px'
            :
            props.size === 'big' ?
            '24px'
            :
            props.size === 'large' ?
            '36px'
            :
            props.size === 'largest' &&
            '48px'
        };
        line-height: ${props => 
            props.size === 'medium' || props.size === 'small' || props.size === 'smallest' ?
            '1.5'
            :
            props.size === 'big' || props.size === 'large' ?
            '1.25'
            :
            props.size === 'largest' &&
            '1'
        };
    }
`

export default TextStyle;