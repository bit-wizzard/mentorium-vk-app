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
        padding: 2rem 0;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 0.5rem;
    }

`