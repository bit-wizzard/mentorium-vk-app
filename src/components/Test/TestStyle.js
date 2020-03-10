import styled from 'styled-components'

export const TestStyle = styled.div 
`   
    grid-template-rows: auto 1fr;
    margin-bottom: 4rem;

    .test-content {
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-gap: 1rem;
        margin-bottom: 3rem;
    }
`
export const TestQuestion = styled.div
`   margin-top: 1rem;

    .test-question {
        grid-gap: 0.5rem;
        display: grid;
        padding: 1rem;
        border-radius: 15px;
    }
    .status {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    .correct {
        background: rgba(130, 222, 139, 0.5);
    }
    .incorrect {
        background: rgba(255, 128, 128, 0.2);
    }
`
export const TestOptions = styled.div 
`   display: grid;
    grid-gap: 1rem;

    .test-option {
        background: #fbfbfb;
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