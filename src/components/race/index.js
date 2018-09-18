import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { clearStats, fetchRace, fetchRaceSuccess, fetchRaceFailure } from '../../actions/getRace'
import Event from '../event'
import Stats from '../stats'

class Race extends Component {
  state = {
    filter: 'practice',
  }

  componentWillMount(){
    this.props.fetchRace( 123 )
  }

  eventFilter(e){
    this.setState({filter: e})
    this.props.clearStats()
  }

  render() {
    return(
      <div>
      <ButtonEvent onClick={() => this.eventFilter('practice')}>Practice</ButtonEvent>
      <ButtonEvent onClick={() => this.eventFilter('qualify')}>Qualify</ButtonEvent>
      <ButtonEvent onClick={() => this.eventFilter('race')}>Race</ButtonEvent>
      <Wrapper>
        <Col>
       <Title>{ String.toUpperCase(this.state.filter) }</Title>
       <Event event={sortGrid(this.props.race[this.state.filter])} isRace={this.state.filter === 'race'}/>
        </Col>
        <Col>
       <Title >STATS</Title>
      <Stats style={{height: '100%'}} />
        </Col>
      </Wrapper>
      </div>
      )
  }
}

const sortGrid = (event) => {
  return event.slice().sort(( a, b ) => a.position > b.position)
}


const Title = styled.h1`
  color: black;
`

const ButtonEvent = styled.button`
  color: black;
  background: white;
  border: 1px solid black;
  margin: 10px;
  font-size: 1.2em;
  &:active, &:hover {
   background: #7FFFD4;
   color: white;
  }
`

const Col = styled.div`
  margin: 0;
  width: 50%;
  height: 100%;
  float: left;
`

const Wrapper = styled.div`
  height: 100%
  width: 75%;
  margin: 0 auto;
`
const mapStateToProps = state => ({ race: state.raceReducer.race })

const mapDispatchToProps = dispatch => ({
  fetchRace: ( id ) => {
    dispatch( fetchRace( id )).then((response) => {
      !response.error ?
        dispatch(fetchRaceSuccess( response.payload.data.race ))
        : dispatch( fetchRaceFailure( response.payload.data ) )
    })
    .catch( err => console.error(err) )
  },
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Race)
