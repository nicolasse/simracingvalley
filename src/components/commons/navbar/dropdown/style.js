import styled from 'styled-components'
import { device } from '../../../../device'
import {mainBlue, boldBlue, lightBlue} from '../../style'

export const Icon = styled.div`
  margin-left: 1em
`

export const ExternalLink = styled.a`
  text-align: center;
  text-decoration: none;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  transition: all .2s ease-in;
  display: block;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  color: white;
  &:hover {
    background: ${boldBlue};
  }
  display: ${ props => props.home ? 'block' : 'flex' }
    @media ${device.laptop}{
  background: #333;
  }
`
export const Links = styled.div`
  transition: opacity .2s ease-in;
  @media ${device.mobileS}{
    width: 100%;
    ${props => props.hide ? 'display: none' :  'display: block;'}
    flex-flow: column nowrap
  }
  @media ${device.laptop}{
    ${props => props.hide
     ? 'display:none;opacity: 0 '
     : 'display: block; opacity: 1'
    }
    flex-flow: column nowrap;
  }
`
export const Title = styled.a`
  &:hover {
    background: ${boldBlue};
    flex-direction: column;
  }
  z-index: 2;
  text-align: center;
  text-decoration: none;
  color: white;
  min-height: 30px;
  font-size: 15px;
  padding: 10px;
  justify-content: center;
  cursor: default;
  flex-direction: column;
  min-width: 5em;
  transition: background .2s ease-in;

  display: ${ props => props.home ? 'block' : 'flex' }
  @media ${ device.mobileS }{
    display: flex;
  }
  @media ${device.laptop}{
    display: flex;
    float: left;
  }
`

export const Dropbutton = styled.li`
  &:hover {
    background: ${boldBlue};
  }
  transition: background .2s ease-in;
  background: #333;
  list-style-type: none;
  text-decoration: none;
  text-align: center;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    height: 50px;
    width: 95px;
    float: left;
    display: block;
  }
`
