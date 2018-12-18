import styled from 'styled-components'
import { device } from '../../../device'

export const Password = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.95;
  z-index: 2;
  display: ${props => props.hide ? 'none' : 'flex'}
`


export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  filter: blur(1px);
  z-index: 0;
`
export const Background = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  z-index: 0;
`

export const Content = styled.div`
  flex: 1 1 100%;
  height: 20vh;
  display: flex;
  font-weight: bold;
  font-style: italic;
  position: relative;
  justify-content: center;
  @media ${ device.mobileS }{
    font-size: 1.5em;
  }
  @media ${ device.laptop }{
    font-size: 3em;
  }
  margin: 0.5em 0;
`

export const Time = styled.div`
  position: absolute;
  color: white;
  z-index:1;
  top: 1vh;
  left: 1vw;
  font-size: 0.7em
`
export const Car = styled.div`
  position: absolute;
  z-index:1;
  color: white;
  align-self: center;
`
export const Track = styled.div`
  position: absolute;
  color: white;
  font-size: 0.7em
  z-index:1;
  top: 1vh;
  right: 1vw;
`
