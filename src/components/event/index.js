import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectStats } from '../../actions/getRace'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../device'
import { mainColor, boldColor } from '../commons/style'
import FontAwesome from 'react-fontawesome'
import {voteDriver} from '../../actions/voteActions'
import StyledError from '../error'

class Event extends Component {

  handleVote = (e, driver) => {
    e.stopPropagation()
    let raceId = this.props.raceId
    this.props.voteDriver( raceId, driver )
  }


  getQualyPos = (steamID) => {
    let player = this.props.race.qualify.find( player => {
      return player.steamID === steamID
    } )
    return player ? player.position : ''
  }

  render() {
    return(
      <React.Fragment>
      { this.props.voteError && <StyledError hide={!this.props.voteError} message={this.props.voteError} />}
      <Table hide={this.props.shouldMobileHide}>
        <Thead>
          <tr>
            <Th>Pos</Th>
            <Th hide={!this.props.isRace}>Grid</Th>
            <Th>Piloto</Th>
            <Th small={this.props.isRace}>Voltas</Th>
            <Th small hide={!this.props.isRace}>Lideradas</Th>
            <Th small hide={!this.props.isRace}>Incidentes</Th>
            <Th hide={!this.props.isRace}>Total</Th>
            <Th hide={this.props.isRace}>Melhor</Th>
            <Th hide={!this.props.isRace}></Th>
          </tr>
        </Thead>
        <Tbody>
       {this.props.event.map((result, index) =>
         <Tr
           key={index}
           onDoubleClick= { () => this.props.voteDriver( result.userid ) }
           onClick={() => this.props.selectStats(result.laps)} >
          <Td>{ result.position }</Td>
          <Td hide={!this.props.isRace}>{ result.st_position }</Td>
          <Td><UserLink to={'../drivers/' + result.userid}>{ result.driver }</UserLink></Td>
          <Td>{ result.laps.length }</Td>
          <Td hide={!this.props.isRace}>{ result.lapsled }</Td>
          <Td hide={!this.props.isRace}> {result.incidents}</Td>
         {this.props.isRace ? <Td> { result.fulltime } </Td>
          :<Td> { bestLap(result.laps) } </Td>
         }
         { this.props.isRace

          ? <Td>
             {
               !result.userid
                ? <FontAwesome name='thumbs-up' style={{color: 'black'}}/>
                : result.upvotes && result.upvotes.length > 0
                  ? <FontAwesome 
                      onClick={ (e) => this.handleVote(e, result.userid) }
                      name='thumbs-up' 
                      style={{ color: '#87e29e' }}
                      title={ result.upvotes.map( vote => { return ('' + vote.username) } )}
                    />
                  : <FontAwesome
                      onClick={(e) => this.handleVote(e, result.userid) }
                      name='thumbs-o-up'
                      style={{ color: '#87e29e' }}
                    />
             }
             </Td> 
             : null}
         </Tr>
      )}
        </Tbody>
      </Table>
      </React.Fragment>
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
  font-weight: bold;
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
  text-align: center;
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
  font-size: ${props => props.small ? '0.75em' :  '1em'};
  text-align: ${props => props.center ? 'center' : 'left'};
  text-align: center;
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

const mapStateToProps = state => ({race : state.raceReducer.race, voteError: state.voteReducer.error})

const mapDispatchToProps = dispatch => ({
  selectStats: (stats) => {
    dispatch( selectStats( stats ) )
  },
  voteDriver: (race, driver) => {
    dispatch( voteDriver( race, driver ) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
