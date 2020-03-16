import styled from 'styled-components'

export const CourseStyle = styled.div 
`
    padding: 0.5rem;
    background: #fbfbfb;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-radius: 10px;
    grid-gap: 1rem;
    margin-bottom 1rem;

    .card {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 1rem;
    }
    
    .title {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 10px;
        align-items: center;
    }

    .progress {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        grid-gap: 0.5rem;
    }
    `
    // .next-page-wrapper {
        // position: absolute;
        // background: #fff;
        // top: 0;
        // right: 0;
        // z-index: 100;
        // height: 100vh;
    // }
    
    // .next-page {
        // background: lightblue;
    // }
    
    // ${props => props.onEnter ? 
    //     `     
    //         .next-page {
    //             animation-name: next-page;
    //             animation-duration: 1s;
    //         }
    //         @keyframes next-page {
    //             0% {width: 0; height: 100vh}
    //             30% {width: 100vw; height: 100vh}
    //             100% {width: 100vw; height: calc(20vh + 2rem);}
    //           }
    //     `
    //     :
    //     `
    //         .next-page {
    //         }
    //     `}


export const TestStyle = styled.div 
`
    padding: 0.5rem;
    background: #fbfbfb;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-radius: 10px;
    grid-gap: 1rem;
    margin-bottom 1rem; 
      
    .progress {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 0.5rem;
    }
`
export const CourseVerification = styled.div
`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    ${props => props.onDelete ?
        `
            left: 0;
            opacity: 1;
            transition: opacity 0.3s;
        `
    :
        `
            opacity: 0;
            transition: opacity 0.3s;
            left: -1000px;
        `
    }
`