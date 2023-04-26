import React from 'react'
import { StyledButton } from './styles/Button.styled'
import BtnArrow from '../images/BtnArrow.svg'
import BtnArrowRed from '../images/BtnArrowRed.svg'

const Button = ({ placeholder, arrowColor }) => {
  return (
    <StyledButton>
      {placeholder}
      {arrowColor === 'white' ? <img src={BtnArrow} alt='white arrow icon for button' /> : <img src={BtnArrowRed} alt='red arrow icon for button' />}
    </StyledButton>
  )
}

export default Button