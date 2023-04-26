import styled from 'styled-components'

export const StyledServices = styled.div`
    min-height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        font-size: 40px;
        text-transform: uppercase;
        color: #000;
        margin: 0 0 97px 0;
        padding: 0;
    }

    p {
        text-align: center;
        font-weight: 700;
        font-size: 34px;
        text-align: center;
        color: #000000;
        margin: 38px 0 0 0;
    }
`