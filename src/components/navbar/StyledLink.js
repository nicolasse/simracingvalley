import style from 'styled-components'
import { NavLink } from 'react-router-dom'
import {device} from '../../device'
import {mainColor, boldColor, lightColor} from '../commons/style'

const StyledLink = style(NavLink)`
  @media ${device.mobileS}{
   background: #333;
   color: white;
  }
  min-width: 5em;
  text-align: center;
  text-decoration: none;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  transition: all .2s ease-in;
  display: block;
  justify-content: center;
  flex-direction: column;
  flex: 1 0.5 100%
  &:hover {
    background: ${boldColor};
  }
  &.active {
    background: #bed0d1;
    color: black;
  }
  display: ${ props => props.home ? 'block' : 'flex' }
    @media ${device.laptop}{
  ${props => props.dropdown
  ? 'background: ' +lightColor+'; color: black; float: none;'
  : 'background: #333; color: white; float: left'
  }
  }
`
export default StyledLink
