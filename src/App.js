import React, { Component } from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import NavBar from './components/navbar'
import Footer from './components/footer'
import { login } from './actions/userActions'

class App extends Component {
  componentWillMount(){
    if(!this.props.user.logged && cookie.load('username')){
      let user = {
        username: cookie.load('username'),
        userId: cookie.load('userId'),
        token: cookie.load('token')
      }
    this.props.login(user)
    cookie.remove('token',  {path: '/'})
    cookie.remove('username',  {path: '/'})
    cookie.remove('userId',  {path: '/'})
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.userReducer })
const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
