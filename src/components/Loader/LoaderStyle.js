import styled from 'styled-components'

export const LoaderStyle = styled.div `
    display: grid;
    grid-template-rows: auto 1fr;
    height: calc(100vh - 2rem);
`
export const LoaderContent = styled.div `
    width: 100%;
    display: grid;
    align-self: center;
    justify-self: center;

    .hello {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0.3rem;
        padding-bottom: 0.2rem;
    }

    .hello_content_1 {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
    }
`