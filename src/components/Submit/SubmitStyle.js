import styled from 'styled-components'

export const SubmitStyle = styled.div 
`
    padding-bottom: 4rem;
    .test-header {
        background: #f0f0f0;
        padding: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
        height: 20vh;  
        border-radius: 0; 
    }
`

export const SubminContent = styled.div 
`   
    padding: 1rem;
    .card {
        border-radius: 10px;
        padding: 1rem;
        background: #fbfbfb;
    }
    .question {
        display: grid;
        grid-gap: 0.5rem;
        padding: 1rem;
        background: #fff;
        border-radius: 10px;
    }
    .answer {
        padding: 1rem;
        background: #fbfbfb;
        margin: 0.5rem 0;
        display: grid;
        border-radius: 10px;
    }
    .correct {
        padding: 1rem;
        display: grid;
        background: rgba(130, 222, 139, 0.5);
        border-radius: 10px;
    }
`