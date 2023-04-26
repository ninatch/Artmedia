import styled from 'styled-components'

export const StyledFooter = styled.div`
    height: 330px;
    width: 1420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #2B3252;
    color: #fff;
    padding: 0;
    margin: 0 auto;

    .logo-items, .menu-and-socials, .logo, .menu, .socials {
        display: flex;
    }

    .logo-items, .menu-and-socials {
        flex-direction: column;
    }

    .logo, .menu, .socials {
        flex-direction: row;
    }

    .logo-items {
        gap: 36px;
    }
    
    .logo-items > p {
        font-weight: 400;
        font-size: 16px;
        color: #fff;
        opacity: 0.7;
        margin: 0;
    }
    
    .logo {
        gap: 26px;
    }

    .logo p {
        max-width: 54px;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        text-transform: uppercase;
        color: #fff;
    }

    .menu-and-socials {
        gap: 42px;
    }

    .menu {
        gap: 50px;
    }

    .menu p {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
    }

    .socials {
        gap: 18px;
    }

    .socials img {
        cursor: pointer;
    }

    .contact-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 2fr;
        grid-gap: 20px;
        grid-template-areas: 
            'n e'
            't t'
    }

    .input-name {
        grid-area: n;
    }

    .input-email {
        grid-area: e;
    }

    .input-text-wrapper {
        grid-area: t;
        display: grid;
        grid-template-columns: 1fr auto;
        position: relative;
    }

    .form-btn {
        position: absolute;
        right: 20px;
        bottom: 20px;
        background-color: #EF5555;
        height: 42px;
        width: 74px;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        opacity: 70%;
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        text-indent: 20px;
        padding: 11px 0 14px 0;
    }
`