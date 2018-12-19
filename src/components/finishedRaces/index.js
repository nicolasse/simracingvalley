import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRaces } from '../../actions/getRaces'
import Paginator from '../commons/paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'
import Loading from '../commons/loading'
import { Wrapper } from './style'

class RaceContainer extends Component {

  componentDidMount = () => {
    this.props.fetchRaces( 0 )
  }

  handleClickPage = paginatorObj => {
    let page = paginatorObj.selected
    this.props.fetchRaces(page)
  }

  handleClickRace = (raceId) => {
    this.setState({raceId: raceId})
    this.props.history.push('/races/' + raceId)
  }

render (){

  return(
    <Wrapper>
    { this.props.loading ? <Loading />
    : <Table>
      <Thead>
        <Tr style={{background: 'white'}}>
          <Th>Car</Th>
          <Th>Track</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
    <Tbody>
    {this.props.races.map((race) => 
        <Tr onClick={() => this.handleClickRace(race._id)} hover key={race._id} cdc={race.srvsettings.cdc} >
          <Td> {race.srvsettings.cars[0]} </Td>
          <Td>{race.srvsettings.tracks[0]} </Td>
          <Td>{race.srvsettings.date}</Td>
        </Tr>
      )} 
      </Tbody>
      </Table>
    }
      <Paginator 
        pageCount={ this.props.pages }
        pageRangeDisplayed={ 3 }
        marginPagesDisplayed={ 1 }
        onPageChange={this.handleClickPage}
      />
      </Wrapper>

    )
  }
} 


const mapStateToProps = state => ({loading: state.racesReducer.loading, races: state.racesReducer.races, pages: state.racesReducer.pages })
const mapDispatchToProps = dispatch => ({
  fetchRaces: (page) => {
    dispatch( fetchRaces(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RaceContainer))
