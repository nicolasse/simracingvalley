import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleLoading } from '../../../actions/navbarActions'
import { logout } from '../../../actions/userActions'
import Dropdown from './dropdown'
import FontAwesome from 'react-fontawesome'
import { Steam, Menu, Nav, StyledLink, Logo } from './style'


const logoWhite = require('../../../images/logoWhite.png')
const logoBlack = require('../../../images/logoBlack.png')

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
    if( this.state.path !== window.location.pathname ){
      this.setState({path: window.location.pathname, visible: false})
      this.props.toggleLoading()
    }
  }

  render() {
    let logo = this.state.path === '/' ? logoBlack : logoWhite
    return(
      <React.Fragment>
      <Menu onClick={() => this.handleMenu()}>Menu</Menu>
      <Nav onClick={() => this.handleChange()} visible={this.state.visible}>
      <StyledLink home={'true'} exact to='/'><Logo alt='SIMRACING VALLEY' src={logo} /></StyledLink>
      <StyledLink to='/ranking'>Ranking</StyledLink>
      <StyledLink to='/agenda'>Agenda</StyledLink>
      <Dropdown
        name='Resultados'
        links={[
          {
            path: '/races',
            name:'Races',
            external: false
          },
          {
            path:'/records',
            name:'Records',
            external: false
          }
        ]}
      />
      <Dropdown
        name='Outros'
        links={[
          {
            path: '/static/others/Manual_SV.pdf',
            name:'Manual',
            icon:<FontAwesome name='download' /> ,
            external: true
          },
          {
            path:'/static/others/Automobilista_DAQ.rar',
            name:'Plugin',
            icon: <FontAwesome name='download' />,
            external: true
          }
        ]} />
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
          <Steam href='/api/auth/steam' ><img style={{margin: '0 auto'}} alt='steam' src='https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png' /></Steam> 
        }
      </Nav>
      </React.Fragment>
    )
  }
}



const mapStateToProps = state => ({ loading: state.navbarReducer.loading, user: state.userReducer })

const mapDispatchToProps = dispatch => ({
  toggleLoading: () => dispatch(toggleLoading()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
