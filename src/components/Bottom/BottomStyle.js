import styled from 'styled-components'

export const BottomStyle = styled.div `
    position: relative;
`
export const BottomInner = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    widht: 100%;
    background: #FFB600;
    border-radius: 30px 30px 0 0;
    justify-content: center;
    
    .caption {
        display: grid;
        height: auto;
        padding: 1rem 0 2rem 0;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 0.5rem;
    }
    ${props => props.active ?
    `
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0);
    `
    :
    `
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    `
    }
`