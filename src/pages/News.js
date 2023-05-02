import React from 'react'
import { StyledNews } from './styles/News.styled'
import Slider from '../components/Slider'



const News = () => {
  return (
    <StyledNews className='container'>
        <h2>News</h2>
        <Slider />
    </StyledNews>
  )
}

export default News