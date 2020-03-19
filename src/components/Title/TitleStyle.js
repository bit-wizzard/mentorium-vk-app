import styled from 'styled-components'

export const TitleStyle = styled.div `
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    grid-gap: 1rem;
    .chevron {
        opacity: 0;
    }
    
`
export const VerificationStyle = styled.div 
`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: 800;
    ${props => props.verificationOn ?
    `
        left: 0;
        opacity: 1;
        transition: opacity 0.3s;
    `
:
    `
        opacity: 0;
        transition: opacity 0.3s;
        left: -1000px;
    `
}
`