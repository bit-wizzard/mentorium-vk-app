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
    border-radius: 15px;
    justify-content: center;
    margin: 0 1rem 1rem 1rem;
    
    .caption {
        display: grid;
        height: auto;
        padding: 1rem 0;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 0.5rem;
    }

`