import styled from 'styled-components'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 9rem;
    margin: 14.95rem auto 14.5rem;

    .image-container{
        height: 64rem;
        width: 59rem;
    }

    h2 {
        font-weight: 700;
        font-size: 4rem;
        color: #000;
        margin: 8rem 0 3.7rem 0;
        padding: 0;
    }

    p {
        max-width: 60rem;
        font-weight: 500;
        font-size: 2rem;
        line-height: 3.2rem;
        color: #2B3252;
        margin: 0 0 4.7rem 0;
    }

    button {
        color: #EF5555;
        border-color: #EF5555;
    }
`