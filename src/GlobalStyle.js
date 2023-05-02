import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body, html {
        box-sizing: border-box;
        height: auto;
        width: auto;
        display: flex;
        justify-content: center;
        font-size: 10px;
        min-width: 192rem;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        cursor: default;
    }

    .container {
        width: 142rem;
    }

    /* @media (max-width: 480px) {
        
    }

    @media (max-width: 1366px) {

    } */
`

export default GlobalStyle