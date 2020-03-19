import styled from 'styled-components'


export const CourseSelectorStyle = styled.div`
    background: rgb(251,251,251);
    background: linear-gradient(180deg, rgba(251,251,251,1) 0%, rgba(251,251,251,1) 57%, rgba(251,251,251,0.9037814955083596) 72%, rgba(251,251,251,0) 100%);    display: grid;
    grid-gap: 0.5rem;
    border-radius: 15px 15px 0 0;
    padding: 1rem;
    position: relative;
    z-index: 80;
    .selector-item {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 0.5rem 0;
        position: relative;
        z-index: 80;
    }
`