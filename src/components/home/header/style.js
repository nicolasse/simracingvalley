import styled from 'styled-components'
import { device } from '../../../device'

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
   height: 100%; 
`

export const AnimatedText = styled.h1`
  position: absolute;
  @media ${device.mobileS}{
    font-size: ${props => props.small ? '1.1em' : '2.2em'};
  }
  @media ${device.laptop}{
    font-size: ${props => props.small ? '1.5em' : '4em'};
  }
  color: white;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: ${props => props.small ? 'translate(-55%, -250%)' : 'translate(-50%, -50%)'};
  z-index: 0;
`
export const Content = styled.div`
  position: sticky;
  z-index:0;
  top: 50px;
  flex: 1 1 100%;
  @media ${device.mobileS}{
    height: 30vh;
  }
  @media ${device.laptop}{
    height: 50vh;
  }
`
