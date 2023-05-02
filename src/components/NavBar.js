import React, { useState } from 'react'
import { StyledNavBar } from './styles/NavBar.styled'
import Logo from '../images/Logo.svg'
import Magnifier from '../images/Magnifier.svg'
// import { Link } from 'react-scroll'

const NavBar = () => {

    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    
    console.log(keyword)

    return (
        <StyledNavBar className='nav-bar'>

            <div className='logo-container'>
                <img src={Logo} alt='logo'/>
                <p>Company Name</p>
            </div>

            <div className='menu-items'>
                <p>Home</p>
                <p>Services</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </div>

            <div className='search-items'>
                <input type='text' value={keyword} onChange={handleChange} placeholder='Search keyword...'></input>
                <button type='submit'>
                    <img src={Magnifier} alt='magnifying glass for search bar'></img>
                </button>
            </div>

        </StyledNavBar>
    )
}

export default NavBar