import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleLoading } from '../../actions/navbarActions'
import { logout } from '../../actions/userActions'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav'
import StyledLink from './StyledLink'
import Logo from './Logo'
import Logout from './Logout'
import styled from 'styled-components'

import Ranking from '../ranking'
import Home from '../home'
import Profile from '../profile'
import RaceContainer from '../raceContainer'
import Race from '../race'
import UserForm from '../userForm'

import { device } from '../../device'

const logoWhite = require('../../images/logoWhite.png')
const logoBlack = require('../../images/logoBlack.png')

class NavBar extends Component {

  state = {
    visible: false,
    path: window.location.pathname,
  }

  componentWillMount() {
    this.props.toggleLoading()
  }

  handleSignIn(e){
    e.preventDefault()
  }

  handleLogout(){
    this.props.logout()
    window.location.assign('/')
  }

  handleMenu(){
    this.setState({visible: !this.state.visible})
  }

  handleChange(){
    this.setState({path: window.location.pathname, visible: false})
    this.props.toggleLoading()
  }

  render() {
    let logo = this.state.path === '/' ? logoBlack : logoWhite
    let isHide = this.props.user.logged ? 'none' : 'block'
    return(
      <Router>
      <div>
      <Menu onClick={() => this.handleMenu()}>Menu</Menu>
      <Nav onClick={() => this.handleChange()} visible={this.state.visible}>
        <StyledLink home={'true'} exact to='/'><Logo alt='SIMRACING VALLEY' src={logo} /></StyledLink>
        <StyledLink to='/ranking'>Ranking</StyledLink>
        <StyledLink to='/races'>Resultados</StyledLink>
        { this.props.user.logged ?
          <React.Fragment>
            <StyledLink to={'/drivers/' + this.props.user.userId}> {this.props.user.username}</StyledLink>
            <StyledLink
              style={{ float: 'right' }}
              to='/'
              onClick={() => this.handleLogout()}
            >
                Logout
            </StyledLink>
          </React.Fragment>
        :
          <Steam href='http://localhost:8080/auth/steam'><img style={{margin: '0 auto'}} alt='steam' src='https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png' /></Steam> 
        }
      </Nav>
      <Content>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/ranking' component={ Ranking } />
        <Route path='/resultados' component={ Home } />
        <Route path='/ligasecopas' component={ Home } />
        <Route path='/social' component={ Home } />
        <Route path='/equipes' component={ Home } />
        <Route path='/drivers/:id' render={({match}) => (<Profile id={match.params.id}/>) } />
        <Route exact path='/races' component={ RaceContainer } />
        <Route path='/races/:id' render={({match}) => (<Race id={match.params.id} />)} />
        <Route path='/users/:id' render={() => (this.props.user.logged ? <UserForm /> : <Home />)} />
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
  @media ${device.mobileS}{
  width: 100%;
  text-align: center;
  }
  @media ${device.laptop}{
    float: right;
    width: 180px;
  }
  display: inline-block;
  height: 30px;
  background: #333;
  padding: 10px;
`

const mapStateToProps = state => ({ loading: state.navbarReducer.loading, user: state.userReducer })

const mapDispatchToProps = dispatch => ({
  toggleLoading: () => dispatch(toggleLoading()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
