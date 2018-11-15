import React, { Component } from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import Content from './components/content'
import Footer from './components/footer'
import { login } from './actions/userActions'
import styled from 'styled-components'

class App extends Component {
  componentWillMount(){
    if(!this.props.user.logged && cookie.load('username')){
      let user = {
        username: cookie.load('username'),
        userId: cookie.load('userId'),
        token: cookie.load('token'),
        email_confirmed: cookie.load('email_confirmed')
      }
    this.props.login(user)
    cookie.remove('token',  {path: '/'})
    cookie.remove('username',  {path: '/'})
    cookie.remove('userId',  {path: '/'})
    cookie.remove('email_confirmed', {path: '/'})
    }
  }

  render() {
    return (
      <Wrapper>
        <Content />
        <Footer />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
width: 100%
margin: 0 auto
`

const mapStateToProps = state => ({ user: state.userReducer })
const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
