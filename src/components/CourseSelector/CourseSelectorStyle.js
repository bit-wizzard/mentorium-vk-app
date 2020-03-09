import styled from 'styled-components'

export const CourseSelectorBack = styled.div 
`
    position: absolute;
    top:0;
    left: 0;
`

export const CourseSelectorBackground = styled.div
`
    height: 100vh;
    width: 100vw;
`

export const CourseSelectorStyle = styled.div `
    background: #FFB600;
    margin-top: 1rem;
    border-radius: 15px 15px 0 0;
    position: fixed;
    margin: 0 1rem;
    left: 0;
    right: 0;
    display: grid;
    align-item: center;


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

    ${props => props.main ? 
    `display: none`:``}
`
export const CourseSelectorInner = styled.div
`
    height: 54px;
    background: #fff;
    margin: 1rem;
    margin-bottom: 50px;
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
export const CourseSelectorInnerActivated = styled.div 
`
    background: #fff;
    margin: 1rem 1rem 50px 1rem;
    border-radius: 15px;
    padding: 0 1rem; 
    display: grid;
    align-items: center;
    
    .selectorInnerActivated {
        height: 54px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
`