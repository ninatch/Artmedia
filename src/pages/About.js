import React from 'react'
import { StyledAbout } from './styles/About.styled'
import Button from '../components/Button'

const About = () => {
  return (
    <StyledAbout className='container'>
        <div>
          <p>picture</p>
        </div>
        <div>
          <h2>About Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button placeholder={'See more ->'}/>
        </div>
    </StyledAbout>
  )
}

export default About