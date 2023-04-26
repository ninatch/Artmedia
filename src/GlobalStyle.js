import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        cursor: default;
    }

    .container {
        height: 100%;
        width: 1420px;
        margin: 0 auto;
        padding: 5rem 0;
    }

    .color-box {
        content: '';
        width: 100vw;
        height: 330px;
        background-color: #2B3252;
    }


/* @media (max-width: 1920px) {
}

@media (max-width: 1366px) {

} */
`

export default GlobalStyle