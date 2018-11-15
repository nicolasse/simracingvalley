import style from 'styled-components'
import { NavLink } from 'react-router-dom'
import {device} from '../../device'
import {mainColor, boldColor} from '../commons/style'

const StyledLink = style(NavLink)`
  ${props => props.dropdown
  ? 'background: ' +mainColor+'; color: white; float: none;'
  : 'background: #333; color: white; float: left'
  }
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
    background-color: ${props => props.dropdown ? boldColor : boldColor};
  }
  &.active {
    background: white;
    color: black;
  }
  display: ${ props => props.home ? 'block' : 'flex' }
    @media ${device.laptop}{
  }
`
export default StyledLink
