import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectStats } from '../../../actions/getRace'
import FontAwesome from 'react-fontawesome'
import {voteDriver} from '../../../actions/voteActions'
import StyledError from '../../commons/error'
import Loading from '../../commons/loading'
import { Tr, Td, Th, Tbody, Thead, Table, UserLink  } from './style'
import { boldBlue, mainGreen } from '../../commons/style'
import Stats from '../stats'

class Event extends Component {
  state={
    error: '',
    stats: [],
    show: null,
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

   handleShow = (userid) => {
     if( userid === this.state.show ){
       this.setState({show: null})
     }
     else{
       this.setState({ show: userid })
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
            <Th flex2>Piloto</Th>
            <Th small={this.props.isRace}>Voltas</Th>
            <Th small hide={!this.props.isRace}>Lideradas</Th>
            <Th small hide={!this.props.isRace}>Incidentes</Th>
            <Th hide={!this.props.isRace}>Total</Th>
            <Th hide={this.props.isRace}>Melhor</Th>
            <Th hide={!this.props.isRace}></Th>
          </Tr>
        </Thead>
        <Tbody>
       {this.props.event.map((result, index) =>{
         return(
           <React.Fragment key={index}>
         <Tr
           onDoubleClick= { () => this.props.voteDriver( result.userid ) }
           onClick= { () => { this.handleShow(result.userid)  }} >
          <Td>{ result.position }</Td>
          <Td hide={!this.props.isRace}>{ result.st_position }</Td>
          <Td flex2><UserLink to={'../drivers/' + result.userid}>{ result.driver }</UserLink></Td>
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
                  ? <div style={{ color: mainGreen }}><FontAwesome 
                      onClick={ (e) => this.handleVote(e, result.userid) }
                      name='thumbs-up'
                      style={result.upvotes.find( vote => vote.voterid === this.props.user.userId ) ? {color: boldBlue} : {color: mainGreen }}
                      title={ result.upvotes.map( vote => { return ('' + vote.username) } )}
                    />{" ("+result.upvotes.length+ ")"}</div>
                  : <FontAwesome
                      onClick={(e) => this.handleVote(e, result.userid) }
                      name='thumbs-o-up'
                      style={{ color: mainGreen }}
                    />
             }
             </Td> 
             : null}
         </Tr>
           <Stats show={ this.state.show === result.userid } stats={result.laps} />
           </React.Fragment>
         )}
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
