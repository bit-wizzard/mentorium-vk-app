import styled from 'styled-components'

export const CourseSelectorStyle = styled.div `
    width: 100%;
    background: #FFB600;
    margin-top: 1rem;
    border-radius: 30px 30px 0 0;
    position: fixed;
    height: 136px;
    left: 0;
    right: 0;
    display: grid;
    align-item: center;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);


    ${props => props.active ?
    `
        bottom: 30px;
        transition: 0.3s;
    `
    :
    `
        bottom: -168px;
        transition: 0.5s;
    `}
`
export const CourseSelectorInner = styled.div
`
    height: 54px;
    background: #fff;
    margin: 1rem;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 1rem;

    ${props => props.active ?
    `
        opacity: 1;
        transition: 0.5s;
    `
    :
    `
        opacity: 0;
        transition: 0.1s;
    `
    }
`