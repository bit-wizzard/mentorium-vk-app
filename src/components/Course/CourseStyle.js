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
    }
    
    .title {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 10px;
    }

    .progress {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        grid-gap: 0.5rem;
    }
`
export const TestStyle = styled.div 
`
    padding: 0.7rem 0.5rem;
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