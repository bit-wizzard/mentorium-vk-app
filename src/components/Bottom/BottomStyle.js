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
    z-index: -500;
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

    display: grid;
    margin: 0 1rem;
    background: #fff;
    padding-bottom: 1rem;
    
    
    transition: 0.1s;
    
    .caption {
        border-radius: 15px;

        display: grid;
        background: #FFB600;
        padding: 1rem;
        justify-content: center;
        position: relative;
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
                bottom: 0;
                opacity: 1;
                transition: 0.2s;
                z-index: 1;
            }
        ` 
        : 
        `
            .course-selector-inner {
                opacity: 0;
                bottom: -10rem;
                transition: 0.2s;
                z-index: -999;
            }
        `
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