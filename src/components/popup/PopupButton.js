import style from 'styled-components'

const PopupButton = style.button`
display: block;
  padding: 1em 3em;
  font-size: 1em;
  border-radius: 2em
  background-color: Transparent;
  border: 2px solid white;
  color: white;
  transition: all .2s ease-in;
  z-index: 1;

  &:hover {
    color: black;
    background-color: white;
  }
`

export default PopupButton
