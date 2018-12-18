import styled from 'styled-components'
import { device } from '../../../device'
import { NavLink } from 'react-router-dom'
import {mainBlue, boldBlue, lightBlue} from '../style'

export const Logo = styled.img`
  height: 30px
`
export const StyledLink = styled(NavLink)`
  @media ${device.mobileS}{
   ${props => props.dropdown 
   ? 'background:' +lightBlue +'; color: black' 
   : null
   }
  ${ props => props.to === window.location.pathname
  ? 'background: #bed0d1; color: black;'
  : 'background: #333; color: white;'
  }
  }
  min-width: 5em;
  text-align: center;
  text-decoration: none;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  transition: background .2s ease-in;
  display: block;
  justify-content: center;
  flex-direction: column;
  flex: 1 0.5 100%
  &:hover {
    background: ${boldBlue};
    color: white;
  }
  display: ${ props => props.home ? 'block' : 'flex' }
  @media ${device.laptop}{
  ${props => props.dropdown
    ? 'background: ' +lightBlue+'; color: black; float: none;'
    : ' float: left'
  }
  ${ props => props.to === window.location.pathname
  ? 'background: #bed0d1; color: black;'
  : 'background: #333; color: white;'
  }
  }
`

export const Nav = styled.nav`
  background: #333;
  width: 100%;
  z-index: 2;
  height: 50px;
  justify-content: center;
  @media ${device.mobileS}{
    display: ${props => props.visible ? 'flex' : 'none'}
    flex-flow: row wrap;
    top: 50px;
    position: absolute;

  }
  @media ${device.laptop}{
    display: block;
    top: 0;
    position: fixed;
  }

`

export const Menu = styled.button`
  text-align: right;
  border: 0;
  z-index: 3;
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
  background: #333;
  color: white;
  @media ${device.mobileS}{
  display: block;
  }
  @media ${device.laptop}{
  display: none;
  }
`
export const Steam = styled.a`
  @media ${device.mobileS}{
  width: 100%;
  text-align: center;
  position: relative
  }
  @media ${device.laptop}{
    float: right;
    width: 180px;
  }
  display: inline-block;
  height: 30px;
  background: #333;
  padding: 10px;
`
