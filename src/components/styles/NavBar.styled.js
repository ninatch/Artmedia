import styled from 'styled-components'

export const StyledNavBar = styled.div`
    width: 142rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    margin: 5rem auto;
    background-color: #fff;

    p {
        padding: 0;
        margin: 0;
        align-self: center;
    }

    .logo-container, .menu-items, .search-items {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-bottom: .1rem solid #EAECF0;
        padding-bottom: 1.1rem;
        padding-right: 5rem;
        color: #2B3252;
    }

    input:focus {
        outline: none;
        border-bottom: .1rem solid #EF5555;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
    }

    input::placeholder {
        font-weight: 400;
        font-size: 1.4rem;
        color: #2B3252;
    }

    .logo-container p {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.7rem;
        text-transform: uppercase;
        color: #2B3252;
        max-width: 12rem;
    }

    .menu-items p {
        font-weight: 700;
        font-size: 1.8rem;
        color: #2B3252;
        padding: 2.5rem;
    }

    .search-items {
        position: relative;
    }

    button {
        cursor: pointer;
    }
`