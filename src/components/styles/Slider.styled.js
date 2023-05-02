import styled from 'styled-components'

export const StyledSlider = styled.div`
    
    .swiper {
        overflow: visible;
        margin: 0;
        padding: 0 0 15.05rem 25rem;
    }
    

    .swiper-container, .swiper-wrapper {
        overflow: visible;
    }
    
    .swiper-slide > img {
        width: 44rem;
        height: 56rem;
        margin: 0;
        padding: 0;
        object-fit: cover !important;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: #2B3252;
        position: absolute;
        top: -11rem;
    }

    .swiper-button-prev {
        left: 157.8rem;
    }

    .swiper-button-next {
        left: 163.8rem;
        padding-left: 2.8rem;
    }

    .swiper-button-next:after, .swiper-button-prev:after {
        font-size: 1.5rem;
    }

    .swiper-button-prev::before, .swiper-button-next::before {
        display: block;
        position: absolute;
        content: '';
        width: 3.2rem;
        height: .2rem;
        background-color: #2B3252;
    }

    .swiper-button-prev::before {
        left: 1rem;
    }

    .swiper-button-next::before {
        right: 1rem;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 44rem;
        height: 56rem;
        background: linear-gradient(205.96deg, rgba(67, 26, 26, 0) -7.14%, #431A1A 121.86%);
    }

    .news-content {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        width: 44rem;
        height: 56rem;
        flex-direction: column;
        position: absolute;
        top: 0;
    }

    h2 {
        font-family: 'Montserrat' !important;
        font-weight: 700 !important;
        font-size: 3.4rem !important;
        line-height: 4.1rem !important;
        color: #fff !important;
        text-transform: none !important;
        margin: 0 !important;
        padding: 0 4rem !important;
    }

    p {
        font-family: 'Montserrat' !important;
        font-weight: 400 !important;
        font-size: 1.4rem !important;
        line-height: 1.7rem !important;
        color: #fff !important;
        opacity: 0.8 !important;
        padding: 1.8rem 0 3.7rem 4rem !important;
    }
    
    button {
        margin: 0 0 5rem 4rem !important;
    }
`