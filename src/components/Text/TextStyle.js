import styled from 'styled-components'

const TextStyle = styled.p 
`
    margin: 0;
    font-family: 'Nunito', sans-serif;
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
        props.size === 'small' ?
        '15px'
        :
        props.size === 'default' ?
        '18px'
        :
        props.size === 'big' &&
        '24px'
    };
    color: ${props => 
        props.type === 'primary' ?
        '#000'
        :
        props.type === 'secondary' ?
        '#6a6a6a'
        :
        props.type === 'brand' &&
        '#ffb600'
    };
    font-weight: ${props => 
        props.weight === 'bold' ? 'bold'
        :
        props.weight === 'light' && 'regular'
    };

`

export default TextStyle;