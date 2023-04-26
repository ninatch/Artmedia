import React from 'react'
import { StyledLanding } from './styles/Landing.styled'
import Button from '../components/Button'

const Landing = () => {
  return (
    <StyledLanding className='container'>
        <div className='image-container'>
          <div className='overlay'></div>
        </div>
        <h1>Company's first service title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <Button arrowColor={'white'} placeholder={'See More'}/>
    </StyledLanding>
  )
}

export default Landing