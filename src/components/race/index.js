import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { clearStats, fetchRace } from '../../actions/getRace'
import Event from '../event'
import Stats from '../stats'
import { device } from '../../device'
import { mainColor } from '../commons/style'

class Race extends Component {
  state = {
    filter: 'race',
    loading: true,
  }

  componentDidMount(){
    let raceId = this.props.id
    this.props.fetchRace( raceId )
  }

  eventFilter(e){
    this.setState({filter: e})
    this.props.clearStats()
  }

  sortGrid = (event) => {
    return event.slice().sort(( a, b ) => a.position - b.position)
  }

  render() {
    let state = this.props.state
    return(
      <Wrapper>
        <ButtonEvent
          activated = {this.state.filter === 'race'} 
          onClick={() => this.eventFilter('race')}>
            Race
        </ButtonEvent>
        <ButtonEvent
          activated = {this.state.filter === 'qualify'} 
          onClick={() => this.eventFilter('qualify')}>
            Qualify
        </ButtonEvent>
        <ButtonEvent
          activated = {this.state.filter === 'practice'} 
          onClick={() => this.eventFilter('practice')}>
            Practice
        </ButtonEvent>
        <Content>
        <Col>
       <Title>{ this.state.filter.toUpperCase() }</Title>

      { state.loading ? 'loading':
      <Event event={this.sortGrid(state.race[this.state.filter])} isRace={this.state.filter === 'race'}/>
      }
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
  ${ props => props.activated
  ? 'color: white; background:' +mainColor 
  : 'color: black; background: white' };
  border: 1px solid black;
  margin: 10px 10px 10px 0;
  font-size: 1.2em;
  padding: 1em;

  &:active, &:hover {
   background: ${ mainColor };
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
    width: 100%;
    font-size: 1em;
  }
  margin: 0 auto;
`
const mapStateToProps = state => ({ state: state.raceReducer })


const mapDispatchToProps = dispatch => ({
  fetchRace: ( id ) => {
    dispatch( fetchRace( id ))
  },
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Race)
