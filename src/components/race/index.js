import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { clearStats, fetchRace, fetchRaceSuccess, fetchRaceFailure } from '../../actions/getRace'
import Event from '../event'
import Stats from '../stats'
import { device } from '../../device'

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
      <Wrapper>
      <ButtonEvent onClick={() => this.eventFilter('practice')}>Practice</ButtonEvent>
      <ButtonEvent onClick={() => this.eventFilter('qualify')}>Qualify</ButtonEvent>
      <ButtonEvent onClick={() => this.eventFilter('race')}>Race</ButtonEvent>
      <Content>
        <Col>
       <Title>{ this.state.filter.toUpperCase() }</Title>
       <Event event={sortGrid(this.props.race[this.state.filter])} isRace={this.state.filter === 'race'}/>
        </Col>
        <Col>
          <Title hideOnMobile>STATS</Title>
          <Stats />
        </Col>
        </Content>
      </Wrapper>
      )
  }
}

const sortGrid = (event) => {
  return event.slice().sort(( a, b ) => a.position > b.position)
}

const Content = styled.div`
  width: 100%;
  @media ${device.mobileS}{
    display: block;
  }
  @media ${device.laptop}{
    display: flex;
  }
`

const Title = styled.h1`
  color: black;
  @media ${device.mobileS}{
    display: ${props => props.hideOnMobile ? 'none' : 'block'}
  }
  @media ${device.laptop}{
    display: block;
  }
`

const ButtonEvent = styled.button`
  color: black;
  background: white;
  border: 1px solid black;
  margin: 10px 10px 10px 0;
  font-size: 1.2em;
  &:active, &:hover {
   background: #7FFFD4;
   color: white;
  }
`

const Col = styled.div`
  @media ${device.mobileS}{
    width: 100%
    display: block;
  }
  @media ${ device.laptop }{
    width: 50%;
    float: left;
    display: flex;
    flex-flow: column;
  }
  margin: 0;
`

const Wrapper = styled.div`
  @media ${device.mobileS}{
    width: 100%;
    font-size: 0.7em;
  }
  @media ${device.laptop}{
    width: 75%;
    font-size: 1em;
  }
  margin: 0 auto;
`
const mapStateToProps = state => ({ race: state.raceReducer.race })

/*
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
*/
const mapDispatchToProps = dispatch => ({
  fetchRace: (id) => dispatch(fetchRace(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Race)
