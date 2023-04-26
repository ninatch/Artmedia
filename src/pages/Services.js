import React from 'react'
import { StyledServices } from './styles/Services.styled'
import Service1 from '../images/Service1.svg'
import Service2 from '../images/Service2.svg'
import Service3 from '../images/Service3.svg'

const Services = () => {
  return (
    <StyledServices className='container'>
        <h2>Services</h2>
        <div className='service-list'>        
          <div>
            <img src={Service1} alt='service 1' />
            <p>Service Name</p>
          </div>
          <div>
            <img src={Service2} alt='service 2' />
            <p>Service Name</p>
          </div>
          <div>
            <img src={Service3} alt='service 3' />
            <p>Service Name</p>
          </div>
        </div>
    </StyledServices>
  )
}

export default Services