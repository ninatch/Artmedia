import styled from 'styled-components'

export const StyledNavBar = styled.div`
    height: 180px;
    width: 1420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    margin: 0 auto;
    background-color: #fff;

    .logo-items, .menu-items, .search-items {
        display: flex;
        flex-direction: row;
        gap: 25px;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-bottom: 1px solid #EAECF0;
        padding-bottom: 11px;
        padding-right: 50px;
        color: #2B3252;
    }

    input:focus {
        outline: none;
        border-bottom: 1px solid #EF5555;
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
        height: 100%;
        display: flex;
    }

    input::placeholder {
        font-weight: 400;
        font-size: 14px;
        color: #2B3252;
    }

    .logo-items p {
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        text-transform: uppercase;
        color: #2B3252;
        max-width: 120px;
    }

    .menu-items p {
        font-weight: 700;
        font-size: 18px;
        color: #2B3252;
        padding: 25px;
    }

    .search-items {
        position: relative;
    }

    button {
        cursor: pointer;
    }
`