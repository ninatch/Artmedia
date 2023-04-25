import React from 'react'
import { StyledNavBar } from './styles/NavBar.styled'
// import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <StyledNavBar className='nav-bar'>
        <div className='logo-items'>
            <p>logo</p>
            <p>company name</p>
        </div>
        <div className='menu-items'>
            <p>Home</p>
            <p>Services</p>
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div>
            <input type='text'></input>
            <button>search</button>
        </div>
    </StyledNavBar>
  )
}

export default NavBar