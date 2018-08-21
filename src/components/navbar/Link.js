import style from 'styled-components'

const Link = style.a`
  color: white;
  font-size: 15px;
  padding: 0.5em 0.8em;
  vertical-align: middle;
  display: inline-block;
  transition: all .2s ease-in;

  &:hover {
  background-color: black;
  }
`
export default Link
