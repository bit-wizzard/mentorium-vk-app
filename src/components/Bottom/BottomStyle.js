import styled from 'styled-components'


export const BottomBack = styled.div 
`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr auto;
    ${props => props.bottomOpened ? `z-index: 1`:`z-index: -500`}
`

export const BottomBackground = styled.div
`
    display: grid;

`

export const BottomStyle = styled.div `

    display: grid;
    margin: 0 1rem;
    background: rgb(251,251,251);
    background: linear-gradient(180deg, rgba(251,251,251,0) 40%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%); 
    padding-bottom: 1rem;
    position: relative;
    z-index: 100;    
    
    transition: 0.1s;
    
    .caption {
        border-radius: 15px;

        display: grid;
        background: #FFB600;
        padding: 1rem;
        justify-content: center;
        position: relative;
        z-index: 150;
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
    z-index: -100;
    `

    // ${props => props.appear ? 
    // `
        // opacity: 1;
        // transition: 0.5s;
    // `
    // :
    // `
        // opacity:0;`
    // }
    
    export const BottomCourseSelector = styled.div 
`

`