import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../commons/navbar'
import Home from '../home'
import Ranking from '../ranking'
import Profile from '../profile'
import FinishedRaces from '../finishedRaces'
import RaceStats from '../raceStats'
import UserForm from '../profile/userForm'
import Records from '../records'
import Schedule from '../schedule'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SocialLinks from '../commons/socialLinks'
import { Wrapper } from './style'

class Content extends Component {
  render(){
    return(
      <Router>
        <React.Fragment>
        <Navbar />
        <Wrapper>
          <SocialLinks />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/ranking' component={ Ranking } />
            <Route path='/agenda' component={ Schedule } />
            <Route path='/resultados' component={ Home } />
            <Route path='/ligasecopas' component={ Home } />
            <Route path='/social' component={ Home } />
            <Route path='/equipes' component={ Home } />
            <Route exact path='/drivers/:id' render={({match}) => (<Profile id={match.params.id}/>) } />
            <Route exact path='/races/' component={ FinishedRaces } />
            <Route path ='/records' component={ Records }/>
            <Route path='/races/:id' render={({match}) => (<RaceStats id={match.params.id } /> )} />
            <Route path='/users/:id' render={ () => (
              this.props.user.logged 
                ? <UserForm /> 
                : <Redirect to ='/' /> 
               )}
            />
          </Switch>
        </Wrapper>
        </React.Fragment>
      </Router>
        )
        }
}



const mapStateToProps = state => ({user: state.userReducer})

export default connect(mapStateToProps, null)(Content)
