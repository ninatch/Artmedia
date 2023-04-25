import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({ placeholder }) => {
  return (
    <StyledButton>
      {placeholder}
    </StyledButton>
  )
}

export default Button