import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectStats } from '../../../actions/getRace'
import FontAwesome from 'react-fontawesome'
import {voteDriver} from '../../../actions/voteActions'
import StyledError from '../../commons/error'
import Loading from '../../commons/loading'
import { Tr, Td, Th, Tbody, Thead, Table, UserLink  } from './style'
import { lightBlue, mainBlue, boldBlue, mainGreen } from '../../commons/style'

class Event extends Component {
  state={
    error: ''
  }

  handleVote = (e, driver) => {
    e.stopPropagation()
    let user = this.props.user
    if(user.logged){
      if( this.props.race.race.find( player => { return player.userid === user.userId } )){
      
      if(user.userId !== driver){
        let raceId = this.props.raceId
        this.props.voteDriver( raceId, driver, user.token )
      }else{
        this.setState({error: 'Não pode votar em si mesmo'})
      }
      }else{
        this.setState({ error: 'Não participou da corrida' })
      }}else{
      this.setState({error: 'User not logged'})
    }
  }


  render() {
    return(
      <React.Fragment>
      { this.props.voteError && <StyledError hide={!this.props.voteError} message={this.props.voteError} />}
      { this.state.error && <StyledError hide={!this.state.error} message={this.state.error} />}
      { this.props.loading ? <Loading />
      : <Table hide={this.props.shouldMobileHide}>
        <Thead>
          <Tr style={{background: 'white', color: 'black'}}>
            <Th>Pos</Th>
            <Th hide={!this.props.isRace}>Grid</Th>
            <Th>Piloto</Th>
            <Th small={this.props.isRace}>Voltas</Th>
            <Th small hide={!this.props.isRace}>Lideradas</Th>
            <Th small hide={!this.props.isRace}>Incidentes</Th>
            <Th hide={!this.props.isRace}>Total</Th>
            <Th hide={this.props.isRace}>Melhor</Th>
            <Th hide={!this.props.isRace}></Th>
          </Tr>
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
                      style={result.upvotes.find( vote => vote.voterid === this.props.user.userId ) ? {color: boldBlue} : {color: mainGreen }}
                      title={ result.upvotes.map( vote => { return ('' + vote.username) } )}
                    />
                  : <FontAwesome
                      onClick={(e) => this.handleVote(e, result.userid) }
                      name='thumbs-o-up'
                      style={{ color: mainGreen }}
                    />
             }
             </Td> 
             : null}
         </Tr>
      )}
        </Tbody>
      </Table>
      }
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


const mapStateToProps = state => ({loading: state.raceReducer.loading, race : state.raceReducer.race, voteError: state.voteReducer.error, user: state.userReducer})

const mapDispatchToProps = dispatch => ({
  selectStats: (stats) => {
    dispatch( selectStats( stats ) )
  },
  voteDriver: (race, driver, token) => {
    dispatch( voteDriver( race, driver, token ) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
