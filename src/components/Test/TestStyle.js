import styled from 'styled-components'

export const TestStyle = styled.div 
`   
    padding-bottom: 4rem;

    .test-content {
        display: grid;
    }
    .test-header {
        background: #FFB600;
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem 1rem 0 1.5rem;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 6fr;
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
        position: absolute;
        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .test-question {
        grid-gap: 0.5rem;
        display: grid;
        padding: 1rem;
        width: calc(100vw - 5rem);
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
`   display: grid;
    grid-gap: 1rem;
    margin-top: 31vh;

    .test-option {
        background: #fafafa;
        border-radius: 10px;
        dipslay: grid;
        grid-gap: 1rem;
        padding: 1rem;
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