import styled from 'styled-components'
import { device } from '../../device'

export const H1 = styled.h1`
  font-size: 3em;
  @media${device.laptop}{
    font-size: 10em;
  }
  font-style: italic;
  color: white;
  margin-left: 1em;
`

export const Iframe = styled.iframe`
  border: 0;
  @media ${device.mobileS}{
    position: relative;
    width: 100%;
    height: 200px;
    margin-top: 1em;
  }
  @media ${device.laptop}{
    top: 40vh;
    position: fixed;
    width: 80%;
    height: 190px;
  }
`

export const Title = styled.h1`
  @media ${device.mobileS}{
    font-size: 1.4em;
  }
  font-size: ${props => props.big ? '1.4em' : '1em'}
  line-height: 2em;
`
export const P = styled.p`
  display: block;
  line-height: 2em;
  width: 100%;
`

export const Wrapped = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media ${device.mobileS}{
    font-size: 0.8em;
    width: 100%;
    margin: 20px auto 0 auto;
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 50vh auto 30vh auto; 
  }
  background: white;
`

export const Section = styled.div`
  background: #fff;
  @media ${device.mobileS}{
    width: 95%;
    margin: 0 auto;
  }
  @media ${device.laptop}{
  padding: 2em;
  width: ${props => props.column ? '30%' : '80%'};
  margin: 0 auto;
  float: left
  }
`
export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 100%;
  background: white;
  z-index: 1;
`
