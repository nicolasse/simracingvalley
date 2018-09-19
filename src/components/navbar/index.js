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

import { device } from '../../device'

const logoWhite = require('../../images/logoWhite.png')
const logoBlack = require('../../images/logoBlack.png')

class NavBar extends Component {

  state = {
    visible: false,
    path: window.location.pathname,
  }
  handleSignIn(e){
    e.preventDefault()
  }

  handleMenu(){
    this.setState({visible: !this.state.visible})
  }

  handleChange(){
    this.setState({path: window.location.pathname, visible: false})
  }

  render() {
    var logo = this.state.path === '/' ? logoBlack : logoWhite
    return(
      <Router>
      <div>
      <Menu onClick={() => this.handleMenu()}>Menu</Menu>
      <Nav onClick={() => this.handleChange()} visible={this.state.visible}>
        <StyledLink home={'true'} exact to='/'><Logo alt='SIMRACING VALLEY' src={logo} /></StyledLink>
        <StyledLink to='/ranking'>Ranking</StyledLink>
      {/*<StyledLink to='/agenda'>Agenda</StyledLink>*/}
        <StyledLink to='/races/123'>Resultados</StyledLink>
      {/* <StyledLink to='/ligasecopas'>Ligas e Copas</StyledLink>*/}
      {/* <StyledLink to='/social'>Discord & Facebook</StyledLink>*/}
      {/*  <StyledLink to='/equipes'>Equipes</StyledLink>*/}
        <Steam href='http://localhost:8080/auth/steam'><img style={{float: 'right'}}alt='steam' src='https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png' /></Steam>
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

const Menu = styled.button`
  text-align: right;
  border: 0;
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  height: 50px;
  background: #333;
  color: white;
  @media ${device.mobileS}{
  display: block;
  }
  @media ${device.laptop}{
  display: none;
  }
`
const Content = styled.div`
  margin-top: 50px;
  @media ${device.mobileS}{
    display: flex;
  }
`

const Steam = styled.a`
  float: rigth;
  display: block;
  width: 100%;
  height: 50px;
  background: #333;
`

export default NavBar
