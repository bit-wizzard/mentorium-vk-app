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

    border-radius: 15px;
    background: #FFB600;
    display: grid;
    margin: 0 1rem 1rem 1rem;
    transition: 0.1s;
    
    .caption {
        display: grid;
        padding: 1rem;
        justify-content: center;
        z-index: 999;
        div {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            grid-gap: 0.5rem;
        }
    }

    .course-selector {
        position: relative;
    }
    .course-selector-inner {
        position: absolute;
        width: 100%;
    }
    ${props => props.bottomOpened ? 
        `
        .course-selector-inner {
                bottom: -1rem;
                z-index: 10;
                transition: 0.2s ease-in-out;
                opacity: 1;
            }
        ` 
        : 
        `
            .course-selector-inner {
                // bottom: -${props => props.margin}px;
                // z-index: -900;
                bottom: -200px;
                opacity: 0;
                transition: 0.2s ease-in-out;
            }
        `
    }
    :active {
        background: rgb(235, 168, 0);
        transition: 0.1s;
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