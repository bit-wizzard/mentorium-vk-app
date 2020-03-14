import styled from 'styled-components'

export const VerificationStyle = styled.div 
`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
`
export const VerificationInner = styled.div
`
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    margin: 0 1rem;

    .options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 1rem;
        grid-gap: 1rem;
    }
`
export const VerificationYes = styled.div
`
    display: grid;
    justify-content: center;
    background: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 5px;
`
export const VerificationNo = styled.div
`
    display: grid;
    justify-content: center;
    padding: 0.5rem 1rem;
    background: #ffb600;
    border-radius: 5px;
`