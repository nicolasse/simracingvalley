import style from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = style(NavLink)`
  float: left;
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
`
export default StyledLink
