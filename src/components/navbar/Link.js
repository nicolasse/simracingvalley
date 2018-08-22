import style from 'styled-components'

const Link = style.li`
  float: ${props => props.login ? 'right' : 'left'}
  text-align: center;
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
export default Link
