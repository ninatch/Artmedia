import React from 'react'
import { StyledServices } from './styles/Services.styled'

const Services = () => {
  return (
    <StyledServices className='services'>
        <h2>Services</h2>
        <div className='service-list'>        
          <div>
            <p>img1</p>
            <p>Service Name</p>
          </div>
          <div>
            <p>img2</p>
            <p>Service Name</p>
          </div>
          <div>
            <p>img3</p>
            <p>Service Name</p>
          </div>
        </div>
    </StyledServices>
  )
}

export default Services