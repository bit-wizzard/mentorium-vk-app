import styled from 'styled-components'

export const CoursePageStyle = styled.div
`   
    padding: 1rem;
    .main-header {
        background: #f0f0f0;
        margin: -1rem -1rem 0 -1rem;     
        padding: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
        height: 20vh;  
        border-radius: 0; 
        position: fixed;
    }
    .test-list {
        margin-top: calc(20vh + 2rem);
        padding-bottom: 4rem;
    }
    .items-enter {
        opacity: 0;
        margin-top: 200px;
    }
    .items-enter-active {
        opacity: 1;
        transition: 0.5s;
        margin-top: 0;
    }

    .items-exit {
        opacity: 1;
    }
    .items-exit-active {
        opacity: 0;
        transition: 0.2s;
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