import styled from 'styled-components'
import LandingImage from '../../images/LandingImage.svg'

export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: #fff;
    margin: 0 auto !important;

    .image-container {
        font-size: 10px;
        align-self: center;
        position: absolute;
        top: 18rem;
        width: 170rem;
        height: 78rem;
        background-image: url(${LandingImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(205.96deg, rgba(67, 26, 26, 0) -7.14%, #431A1A 121.86%);
        border: .1rem solid #000;
        filter: drop-shadow(0rem .4rem .4rem rgba(0, 0, 0, 0.25))
    }

    h1 {
        font-size: 6.2rem;
        font-weight: 700;
        line-height: 7.6rem;
        text-transform: uppercase;
        max-width: 73.6rem;
        margin: 0;
        padding: 31.1rem 0 0 0;
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 160%;
        max-width: 73.6rem;
        opacity: 0.7;
        margin: 2rem 0 2.7rem 0;
    }
`