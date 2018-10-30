import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../home'
import Ranking from '../ranking'
import Profile from '../profile'
import RaceContainer from '../raceContainer'
import Race from '../race'
import UserForm from '../userForm'
import styled from 'styled-components'

class Content extends Component {
  render(){
    return(
      <Router>
      <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/ranking' component={ Ranking } />
        <Route path='/resultados' component={ Home } />
        <Route path='/ligasecopas' component={ Home } />
        <Route path='/social' component={ Home } />
        <Route path='/equipes' component={ Home } />
        <Route path='/drivers/:id' render={({match}) => (<Profile id={match.params.id}/>) } />
        <Route exact path='/races' component={ RaceContainer } />
        <Route path='/races/:id' render={({match}) => (<Race id={match.params.id } />)} />
        <Route path='/users/:id' render={() => (this.props.user.logged ? <UserForm /> : <UserForm />)} />
      </Switch>
      </Wrapper>
      </Router>
        )
        }
}


const Wrapper = styled.div`
  margin-top: 50px;
  min-height: 100vh;
  align-items: center;
`

export default Content
