import styled from 'styled-components'

export const MainStyle = styled.div 
`   
    padding: 1rem;
    .course-list {
        margin-top: 1rem;
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

    .main-header {
        background: #f0f0f0;
        margin: -1rem -1rem 0 -1rem;     
        padding: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
        height: 20vh;  
        border-radius: 0 0 25px 25px; 
    }
    `

    //     ${props => (props.margin === 0 && !props.firstEnter)  &&
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
    //     ${props => (props.margin === 1 && !props.firstEnter)  &&
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
