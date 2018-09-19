import style from 'styled-components'
import { NavLink } from 'react-router-dom'
import {device} from '../../device'

const StyledLink = style(NavLink)`
  background: #333;
  text-align: center;
  text-decoration: none;
  color: white;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  transition: all .2s ease-in;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
  background-color: black;
  }
  &.active {
  background: white;
  color: black;
  }
  display: ${ props => props.home ? 'block' : 'flex' }
  @media ${device.mobileM}{
    
  }
  @media ${device.laptop}{
  float: left;
  }
`
export default StyledLink
