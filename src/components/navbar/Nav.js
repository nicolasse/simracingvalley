import style from 'styled-components'
import { device } from '../../device'

const Nav = style.nav`
  background: #333;
  width: 100%;
  position: fixed;
  z-index: 2;
  height: 50px;
  justify-content: center;
  @media ${device.mobileS}{
    display: ${props => props.visible ? 'flex' : 'none'}
    flex-flow: row wrap;
    top: 50px;

  }
  @media ${device.laptop}{
    display: block;
    top: 0;
  }

`

export default Nav
