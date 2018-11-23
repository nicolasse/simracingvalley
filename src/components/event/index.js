import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectStats } from '../../actions/getRace'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../device'
import { mainColor, boldColor } from '../commons/style'

class Event extends Component {


  getQualyPos = (steamID) => {
    let player = this.props.race.qualify.find( player => {
      return player.steamID === steamID
    } )
    return player ? player.position : ''
  }

  render() {
    return(
      <Table hide={this.props.shouldMobileHide}>
        <Thead>
          <tr>
            <Th>Pos</Th>
            <Th hide={!this.props.isRace}>Grid</Th>
            <Th>Piloto</Th>
            <Th>Voltas</Th>
            <Th hide={!this.props.isRace}>Incidents</Th>
            <Th hide={!this.props.isRace}>Total</Th>
            <Th hide={this.props.isRace}>Melhor</Th>
          </tr>
        </Thead>
        <Tbody>
       {this.props.event.map((result, index) =>
         <Tr
           key={index}
           onClick={() => this.props.selectStats(result.laps)} >
          <Td>{ result.position }</Td>
          <Td hide={!this.props.isRace}>{ this.getQualyPos(result.steamID) }</Td>
          <Td><UserLink to={'../drivers/' + result.userid}>{ result.driver }</UserLink></Td>
          <Td>{ result.laps.length }</Td>
          <Td hide={!this.props.isRace}> {result.incidents}</Td>
         {this.props.isRace ? <Td> { result.fulltime } </Td>
          :<Td> { bestLap(result.laps) } </Td>
         }
         </Tr>
      )}
        </Tbody>
      </Table>
    )
  }
}

const bestLap = (laps) => {
  try{
  const best = laps.find( lap => {
     return lap.bestlap === true
  } )
    return best.laptime
  }
  catch(err){
    return '--:--:--:---'
  }
}

const UserLink = styled(Link)`
  color: black
  text-decoration: none
`

const Table = styled.table`
  @media${device.mobileS}{
  ${props => props.hide ? 'display:none' : 'display: table'}
  font-size: 0.8em;
  }
  @media${device.laptop}{
    display: table; 
  font-size: 1em;
  }
  border-collapse: collapse;
  width: 100%;
  float: left;
  margin: 0 auto;
`

const Thead = styled.thead`
  width: 100%;
  overflow: auto;
  background: #fff;
`

const Tbody = styled.tbody`
  overflow: auto;
`

const Td  = styled.td`
  text-align: ${props => props.right ? 'right' : 'left'};
  vertical-align: top;
  ${props => props.hide ? 'display: none' : null}
  @media${device.mobileS}{
    padding: 0.8em 0.1em;
  }
  @media${device.laptop}{
    padding: 0.8em 0.5em;
  }
`
const Th = styled.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  ${props => props.hide ? 'display: none' : null}
  @media${device.mobileS}{
    padding: 0.8em 0.1em;
  }
  @media${device.laptop}{
    padding: 0.8em 0.5em;
  }
`

const Tr = styled.tr`
  background: white;
  &:nth-child(odd){
    background: #f2f2f2;
  }
  &:hover{
    background: ${ mainColor };
    color: white;
  }
`

const mapStateToProps = state => ({race : state.raceReducer.race})

const mapDispatchToProps = dispatch => ({
  selectStats: (stats) => {
    dispatch( selectStats( stats ) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
