import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body, html {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        border: 1px solid red;
    }

    .container {
        min-height: 100vh;
        width: 1420px;
        margin: 0 auto;
        border: 1px solid blue;
    }

    .nav-bar, .footer {
        min-height: min-content;
        width: 1420px;
        margin: 0 auto;
        border: 1px solid blue;
    }


/* @media (max-width: 1920px) {
}

@media (max-width: 1366px) {

} */
`

export default GlobalStyle