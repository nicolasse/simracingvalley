import React, { Component } from 'react'
import style from 'styled-components'
import Nav from './Nav'
import Link from './Link'
import Logo from './Logo'

const logoWhite = require('../../images/logoWhite.png')
const logoBlack = require('../../images/logoBlack.png')

class NavBar extends Component {

  handleSignIn(e){
    e.preventDefault()

  }

  render() {
    return(
      <Nav>
        <Link><Logo alt='SIMRACING VALLEY' src={logoWhite} /></Link>
        <Link>Ranking</Link>
        <Link>Agenda</Link>
        <Link>Resultados</Link>
        <Link>Ligas e Copas</Link>
        <Link>Discord & Facebook</Link>
        <Link>Equipes</Link>
        <Link login>Sign In</Link>
      </Nav>
    )
  }
}
export default NavBar
