import styled from 'styled-components'

export const TestStyle = styled.div 
`   
    padding-bottom: 4rem;
    display: grid;
    grid-template-rows: 1fr auto;
    .test-content {
        display: grid;
    }
    .test-header {
        background: #FFB600;
        padding: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
        position: fixed;

    }
`
export const TestQuestion = styled.div
`
    margin-top: 1rem;

    .test-content-inner {
        position: relative;
    }
    .test-question-wrapper {
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: auto 1fr;
        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .test-question {
        grid-gap: 0.5rem;
        display: grid;
        padding: 1rem;
        width: calc(100vw - 4rem);
        border-radius: 15px;
        margin-right: 0.5rem;
        background: #fff;
        grid-template-rows: auto 1fr;
    }
    .status {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    // .correct {
        // background: rgba(130, 222, 139, 0.5);
    // }
    // .incorrect {
        // background: rgba(255, 128, 128, 0.2);
    // }
`
export const TestOptions = styled.div 
`       
    margin-top: ${props => props.margin}px;
    width: calc(${props => props.width}px);
    .test-option_wrapper-absolute {
        position: absolute;
        padding-bottom: 4rem;
    }
    .test-option-wrapper {
        display: grid
        grid-gap: 1rem;
    }
    .test-option {
        background: #fafafa;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem;
    }   
    .correct {
        background: rgba(130, 222, 139, 0.5);
    }
    .incorrect {
        background: rgba(255, 128, 128, 0.2);
    }
`
export const TestRusults = styled.div 
`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 3rem;

    .test-answer {
        display: grid;
        grid-gap: 1rem;
    }
    .test-answer_item {
        padding-bottom: 1rem;
    }
`