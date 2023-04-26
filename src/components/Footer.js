import React, { useState } from 'react'
import { StyledFooter } from './styles/Footer.styled'
import LogoBW from '../images/LogoBW.svg'
import IconIG from '../images/IconIG.svg'
import IconFB from '../images/IconFB.svg'

const Footer = () => {

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    text: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setContactInfo(prevContactInfo => ({...prevContactInfo, [name] : value}))
  }

  const handleClick = () => {
    console.log(contactInfo)
  }

  return (
    <div className='color-box'>
      <StyledFooter>

        <div className='logo-items'>
          <div className='logo'>
            <img src={LogoBW} alt='company logo'/>
            <p>Company Name</p>
          </div>
          <p>&copy; 2023 All Rights Reserved</p>
        </div>

        <div className='menu-and-socials'>
          <div className='menu'>
            <p>Services</p>
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className='socials'>
            <img src={IconIG} alt='instagram icon'/>
            <img src={IconFB} alt='facebook icon'/>
          </div>
        </div>

        <form className='contact-form'>
          <input type='text' name='name' value={contactInfo.name} onChange={handleChange} placeholder='Name' className='input-name'/>
          <input type='email' name='email' value={contactInfo.email} onChange={handleChange} placeholder='Email' className='input-email'/>
          <div className='input-text-wrapper'>
            <input type='text' name='text' value={contactInfo.text} onChange={handleChange} placeholder='Text' className='input-text'/>
            <button type='submit' onClick={handleClick} className='form-btn'>Send</button>
          </div>
        </form>

      </StyledFooter>
    </div>
  )
}

export default Footer