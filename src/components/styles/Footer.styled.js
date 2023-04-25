import styled from 'styled-components'

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .logo-items, .menu-items, .socials-items {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .contact-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 1rem;
        grid-template-areas: 
            'n e'
            't t'
            '. b';
    }

    .input-name {
        grid-area: n;
    }

    .input-email {
        grid-area: e;
    }

    .input-text {
        grid-area: t;
    }

    .form-btn {
        grid-area: b;
    }
`