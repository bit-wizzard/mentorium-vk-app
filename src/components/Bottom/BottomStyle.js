import styled from 'styled-components'


export const BottomBack = styled.div 
`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    z-index: -999;
`

export const BottomBackground = styled.div
`
    display: grid;
    ${props => !props.bottomOpened && 
        `
        height: 10px;
        `
    }
`

export const BottomStyle = styled.div `
    background: #FFB600;
    display: grid;
    margin: 0 1rem 1rem 1rem;
    border-radius: 15px;

    .caption {
        display: grid;
        padding: 1rem;
        justify-content: center;
        div {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            grid-gap: 0.5rem;
        }
    }

    .course-selector {
        margin: 0 1rem;
    }
`
export const BottomQuestion = styled.div 
`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
`
export const BottomCourseSelector = styled.div 
`

`