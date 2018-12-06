import style from 'styled-components'
import { device } from '../../device'

const Nav = style.nav`
  background: #333;
  width: 100%;
  z-index: 2;
  height: 50px;
  justify-content: center;
  @media ${device.mobileS}{
    display: ${props => props.visible ? 'flex' : 'none'}
    flex-flow: row wrap;
    top: 50px;
    position: absolute;

  }
  @media ${device.laptop}{
    display: block;
    top: 0;
    position: fixed;
  }

`

export default Nav
