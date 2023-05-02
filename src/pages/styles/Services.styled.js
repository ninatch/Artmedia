import styled from 'styled-components'

export const StyledServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 23.4rem auto 15.65rem auto;

    .service-list {
        display: flex;
        flex-direction: row;
        gap: 10rem;
    }

    .service-list div {
        text-align: center;
    }
    
    h2 {
        font-weight: 700;
        font-size: 4rem;
        text-transform: uppercase;
        color: #000;
        margin: 0 0 9.7rem 0;
        padding: 0;
    }

    p {
        text-align: center;
        font-weight: 700;
        font-size: 3.4rem;
        text-align: center;
        color: #000000;
        margin: 3.8rem 0 0 0;
    }

    img {
        height: 15rem;
        width: 15rem;
    }
`