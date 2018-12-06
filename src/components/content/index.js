import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../home'
import Ranking from '../ranking'
import Profile from '../profile'
import RaceContainer from '../raceContainer'
import Race from '../race'
import UserForm from '../userForm'
import Records from '../records'
import Schedule from '../schedule'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { device } from '../../device'

class Content extends Component {
  render(){
    return(
      <Router>
        <React.Fragment>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/ranking' component={ Ranking } />
            <Route path='/agenda' component={ Schedule } />
            <Route path='/resultados' component={ Home } />
            <Route path='/ligasecopas' component={ Home } />
            <Route path='/social' component={ Home } />
            <Route path='/equipes' component={ Home } />
            <Route exact path='/drivers/:id' render={({match}) => (<Profile id={match.params.id}/>) } />
            <Route exact path='/races/' component={ RaceContainer } />
            <Route path ='/records' component={ Records }/>
            <Route path='/races/:id' render={({match}) => (<Race id={match.params.id } /> )} />
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


const Wrapper = styled.div`
  margin: 0 auto;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 83.3%;
    padding-top: 4em;
  }
  min-height: 60vh;
`

const mapStateToProps = state => ({user: state.userReducer})

export default connect(mapStateToProps, null)(Content)
