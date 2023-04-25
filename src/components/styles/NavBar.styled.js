import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .logo-items, .menu-items, .search-items {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
`