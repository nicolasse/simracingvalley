import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import StyledLink from './StyledLink'
import Logo from './Logo'
import styled from 'styled-components'

import Ranking from '../ranking'
import Home from '../home'

const logoWhite = require('../../images/logoWhite.png')
const logoBlack = require('../../images/logoBlack.png')

class NavBar extends Component {

  handleSignIn(e){
    e.preventDefault()

  }

  render() {
    return(
      <Router>
      <div>
      <Nav>
        <StyledLink to={'/'}><Logo alt='SIMRACING VALLEY' src={logoWhite} /></StyledLink>
        <StyledLink to={'/ranking'}>Ranking</StyledLink>
        <StyledLink to={'/agenda'}>Agenda</StyledLink>
        <StyledLink to={'/resultados'}>Resultados</StyledLink>
        <StyledLink to={'/ligasecopas'}>Ligas e Copas</StyledLink>
        <StyledLink to={'/social'}>Discord & Facebook</StyledLink>
        <StyledLink to={'/equipes'}>Equipes</StyledLink>
        <StyledLink style={{float: 'right'}} to={'./login'}>Sign In</StyledLink>
      </Nav>
      <Content>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/ranking' component={ Ranking } />
        <Route path='/agenda' component={ Home } />
        <Route path='/resultados' component={ Home } />
        <Route path='/ligasecopas' component={ Home } />
        <Route path='/social' component={ Home } />
        <Route path='/equipes' component={ Home } />
        <Route path='/login' component={ Home } />
      </Switch>
      </Content>
      </div>
      </Router>
    )
  }
}

const Content = styled.div`
  margin-top: 50px;
`

export default NavBar
