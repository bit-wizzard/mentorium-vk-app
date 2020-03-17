import styled from 'styled-components'

export const CoursePageStyle = styled.div
`   
    padding: 1rem;
    .main-header-wrapper {
        background: #f0f0f0;
        margin: -1rem -1rem 0 -1rem;     
        padding: 1rem;
        width: 100vw;
        height: 20vh;  
        position: fixed;
    }
    .main-header {
        display: grid;
        grid-template-rows: auto 1fr;
        border-radius: 0; 
    }
    .test-list {
        margin-top: calc(20vh + 2rem);
        padding-bottom: 4rem;
    }
    .items-enter {
        opacity: 0;
    }
    .items-enter-active {
        opacity: 1;
        transition: 0.5s;
    }

    .items-exit {
        opacity: 1;
    }
    .items-exit-active {
        opacity: 0;
        transition: 0.2s;
    }
    .notification {
        margin-right: 2rem;
    }
    ${props => props.opened ? 
    `
        .main-header{
            opacity: 1;
            transition: 0.5s;    
        }
    `:
    `
        .main-header{
            opacity: 0;
        }
    `
    }

`

    //     ${props => (props.margin === 2 && !props.firstEnter)  &&
    //     `
    //     .notification {
    //         width: calc(${props.width}px - 2rem);
    //         animation-name: first;
    //         animation-duration: 0.8s;
    //     }
    //     @keyframes first {
    //         0% {margin-left: 0;}
    //         20% {margin-left: -${props.width}px;}
    //         100% {margin-left: 0}
    //     }
    //     `
    // }   
    //     ${props => (props.margin === 3 && !props.firstEnter)  &&
    //     `
    //     .notification {
    //         width: calc(${props.width}px - 2rem);
    //         animation-name: second;
    //         animation-duration: 0.8s;
    //     }
    //     @keyframes second {
    //         0% {margin-left: 0;}
    //         20% {margin-left: -${props.width}px;}
    //         100% {margin-left: 0}
    //     }
    // `
    // }