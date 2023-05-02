import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body, html {
        box-sizing: border-box;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 10px;
        /* min-width: 192rem; */
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        cursor: default;
    }

    .container {
        max-width: 142rem;
    }

    /* @media (max-width: 480px) {
        
    }

    @media (max-width: 1366px) {

    } */
`

export default GlobalStyle