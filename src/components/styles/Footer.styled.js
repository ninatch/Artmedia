import styled from 'styled-components'

export const StyledFooter = styled.div`
    min-width: 142rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    padding: 0;
    margin: 0 auto;
    max-height: 33rem;
    position: relative;
    background-color: #2B3252;

    .menu-socials-container, .logo, .menu, .socials {
        display: flex;
    }

    .menu-socials-container {
        flex-direction: column;
    }

    .logo, .menu, .socials {
        flex-direction: row;
    }

    .logo-container {
        margin: 10rem 15.3rem 16.2rem 0;
    }
    
    .logo-container > p {
        font-weight: 400;
        font-size: 1.6rem;
        color: #fff;
        opacity: 0.7;
        margin: 3.6rem 0 0 0;
        padding: 0;
    }
    
    .logo {
        gap: 2.6rem;
    }
    
    .logo > p {
        max-width: 5.4rem;
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.7rem;
        text-transform: uppercase;
        margin: .7rem 0;
    }

    .logo img {
        height: 6.153rem;
        width: 6.8rem;
    }

    .menu-socials-container {
        margin: 10.9rem 13.9rem 19.9rem 0;
        gap: 4.2rem;
    }

    .menu {
        gap: 5rem;
    }

    .menu > p {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 1.8rem;
    }

    .socials {
        gap: 1.8rem;
    }

    .socials > img {
        width: 3.201rem;
        height: 3.201rem;
        cursor: pointer;
    }

    .contact-container {
        margin: 8rem 0 20.8rem 0;
        display: grid;
        grid-template-columns: 23rem 23rem;
        grid-template-rows: 4.2rem 12rem;
        grid-gap: 2rem;
        grid-template-areas:
        'n e'
        't t'
    }
    
    input {
        padding: 1.1rem 0 1.4rem 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        opacity: 0.7;
        text-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
        text-indent: 2rem;
        background: none;
        border: .1rem solid rgba(255, 255, 255, 0.3);
        border-radius: .8rem;
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
        right: 2rem;
        bottom: 2rem;
        background-color: #EF5555;
        height: 4.2rem;
        width: 7.4rem;
        border: none;
        border-radius: .8rem;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 700;
        cursor: pointer;
    }

`