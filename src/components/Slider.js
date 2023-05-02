import React from 'react'
import Button from './Button';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import News1 from '../images/News1.svg'
import News2 from '../images/News2.svg'
import News3 from '../images/News3.svg'
import News4 from '../images/News4.svg'
import News5 from '../images/News5.jpeg'
import News6 from '../images/News6.jpeg'
import { StyledSlider } from './styles/Slider.styled';

const Slider = () => {

  const newsArray = [
    {
      image: News1,
      heading: 'There are many variations of passages',
      date: '22 April 2023'
    },
    {
      image: News2,
      heading: 'The point of using Lorem Ipsum',
      date: '20 April 2023'
    },
    {
      image: News3,
      heading: 'I must explain to you how all this mistaken idea',
      date: '19 April 2023'
    },
    {
      image: News4,
      heading: 'On the other hand, we denounce with righteous indignation',
      date: '15 April 2023'
    },
    {
      image: News5,
      heading: 'Heading 5',
      date: '11 April 2023'
    },
    {
      image: News6,
      heading: 'Heading 6',
      date: '30 April 2023'
    },
  ]

  return (
    <StyledSlider>
      <Swiper
          modules={[Navigation]}
          spaceBetween={250}
          slidesPerView={4}
          rewind
          grabCursor={true}
          navigation
        >
        {newsArray.map(news => (   
          <SwiperSlide key={news.image}>
            <div className='overlay'></div>
            <img src={news.image}></img>
            <div className='news-content'>
              <h2>{news.heading}</h2>
              <p>{news.date}</p>
              <Button placeholder={'See More'} arrowColor={'white'}/>
            </div>
          </SwiperSlide>
          ))}
      </Swiper>
    </StyledSlider>
  )
}

export default Slider