import styled from 'styled-components'
import LandingImage from '../../images/LandingImage.svg'

export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: #fff;

    .image-container {
        align-self: center;
        position: absolute;
        top: 180px;
        width: 1700px;
        height: 770px;
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
        border: 1px solid #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    }

    h1 {
        font-size: 62px;
        font-weight: 700;
        line-height: 76px;
        text-transform: uppercase;
        max-width: 736px;
        margin: 0;
        padding: 220px 0 0 0;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
        max-width: 736px;
        opacity: 0.7;
        margin: 0 0 27px 0;
    }
`