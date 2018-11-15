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
position: relative;
  @media ${device.mobileS}{
    margin: 50px auto;
   width: 100%;
  }
  @media ${device.laptop}{
    margin: 100px auto 0 auto;
    width: 75%;
  }
  min-height: 60vh;
  align-items:center;
`

const mapStateToProps = state => ({user: state.userReducer})

export default connect(mapStateToProps, null)(Content)
