import React from 'react'
import { InputEmail, InputName, InputText, StyledFooter } from './styles/Footer.styled'
import Button from './Button'

const Footer = () => {
  return (
    <StyledFooter className='footer'>
          <div className='footer-logo-items'>
            <div className='logo-items'>
                <p>logo</p>
                <p>company name</p>
            </div>
            <p>C 2023 All Rights Reserved</p>
          </div>

          <div className='footer-menu-items'>
            <div className='menu-items'>
                <p>Services</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='socials-items'>
              <p>IG</p>
              <p>FB</p>
            </div>
          </div>

          <form className='contact-form'>
            <input type='text' placeholder='name' className='input-name'/>
            <input type='email' placeholder='email' className='input-email'/>
            <input type='text' placeholder='text' className='input-text'/>
            <button className='form-btn'>Submit</button>
          </form>
    </StyledFooter>
  )
}

export default Footer