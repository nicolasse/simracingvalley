import React, { Component } from 'react'
import style from 'styled-components'
import Nav from './Nav'
import Link from './Link'
import Logo from './Logo'
import Login from './Login'
import SignUp from './SignUp'
import Input from './Input'

const home = require('../../images/logo.png')

class NavBar extends Component {
  render() {
    return(
      <Nav>
        <Link><Logo alt='SIMRACING VALLEY' src={home} /></Link>
        <Link>Ranking</Link>
        <Link>Agenda</Link>
        <Link>Resultados</Link>
        <Link>Ligas e Copas</Link>
        <Link>Discord & Facebook</Link>
        <Link>Equipes</Link>
        <Login>
          <Input type='text' />
          <Input type='password' />
        </Login>
        <SignUp />
      </Nav>
    )
  }
}
export default NavBar
