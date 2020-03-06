import styled from 'styled-components'

export const ImageStyle = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    object-fit: cover;
    padding: 0;
    ${props => props.withFilter &&
        `
        filter: brightness(35%);
        `
    }
    padding: 0 auto;
    ${props => props.fullScreen &&
        `  
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: -999;
        `
    }
`

