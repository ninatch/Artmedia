import styled from 'styled-components'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 90px;

    h2 {
        font-weight: 700;
        font-size: 40px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    p {
        max-width: 600px;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #2B3252;
        margin: 37px 0 47px 0;
    }

    button {
        color: #EF5555;
        border-color: #EF5555;
    }
`