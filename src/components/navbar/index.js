import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import StyledLink from './StyledLink'
import Logo from './Logo'
import styled from 'styled-components'

import Ranking from '../ranking'
import Home from '../home'
import Profile from '../profile'
import Race from '../race'

const logoWhite = require('../../images/logoWhite.png')
const logoBlack = require('../../images/logoBlack.png')

class NavBar extends Component {

  state = {
    pathname: window.location.pathname
  }
  handleSignIn(e){
    e.preventDefault()
  }

  render() {
    var logo = this.state.pathname === '/' ? logoBlack : logoWhite
    return(
      <Router>
      <div>
      <Nav>
        <StyledLink exact to='/'><Logo alt='SIMRACING VALLEY' src={logo} /></StyledLink>
        <StyledLink to='/ranking'>Ranking</StyledLink>
        <StyledLink to='/agenda'>Agenda</StyledLink>
        <StyledLink to='/resultados'>Resultados</StyledLink>
        <StyledLink to='/ligasecopas'>Ligas e Copas</StyledLink>
        <StyledLink to='/social'>Discord & Facebook</StyledLink>
        <StyledLink to='/equipes'>Equipes</StyledLink>
        <Steam href='http://localhost:8080/auth/steam'><img alt='steam' src='https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png' /></Steam>
      { /*<StyledLink style={{float: 'right'}} to='/users/19'>Sign In</StyledLink> */ }
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
        <Route path='/users/:id' component={ Profile } />
        <Route path='/races/123' component={Race} />
      </Switch>
      </Content>
      </div>
      </Router>
    )
  }
}

const Content = styled.div`
  margin-top: 50px;
  min-height: 90vh;
`

const Steam = styled.a`
  float: right;
  margin: 8px;
`

export default NavBar
