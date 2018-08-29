import style from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = style(Link)`
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
`
export default StyledLink
