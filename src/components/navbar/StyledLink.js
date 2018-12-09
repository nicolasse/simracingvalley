import style from 'styled-components'
import { NavLink } from 'react-router-dom'
import {device} from '../../device'
import {mainBlue, boldBlue, lightBlue} from '../commons/style'

const StyledLink = style(NavLink)`
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
export default StyledLink
