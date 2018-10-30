import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRaces, fetchRacesSuccess, fetchRacesFailure } from '../../actions/getRaces'
import Paginator from '../paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'


class RaceContainer extends Component {

  componentDidMount = () => {
    this.props.fetchRaces( 0 )
  }

  handleClickPage = page => {
    this.props.fetchRaces(page)
  }

  handleClickRace = (raceId) => {
    this.props.history.push('/races/' + raceId)
  }

  showPages = () => {
    let pages= []
    for(let page = 0; page < this.props.pages; page ++){
      pages.push(<span onClick={() => this.handleClick(page)}>{ page + 1 }</span>)
      }
    return pages
  }

  render (){
    let totalPages = this.props.pages
    return(
      <React.Fragment>
      <Table>
        <Thead>
          <Tr style={{background: 'white'}}>
            <Th>Car</Th>
            <Th>Track</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
      <Tbody>
      {this.props.races.map((race) => 
        <Tr onClick={() => this.handleClickRace(race._id)} hover={true} key={race._id}>
          <Td> {race.srvsettings.cars[0]} </Td>
          <Td>{race.srvsettings.tracks[0]} </Td>
          <Td>{race.srvsettings.date}</Td>
        </Tr>
      )} 
      </Tbody>
      </Table>
      <Paginator selectPage={this.handleClickPage} pages={totalPages} />
      </React.Fragment>

    )
  }
} 


const mapStateToProps = state => ({ races: state.racesReducer.races, pages: state.racesReducer.pages })
const mapDispatchToProps = dispatch => ({
  fetchRaces: (page) => {
    dispatch( fetchRaces(page)).then(( response ) => {
      !response.error ?
        dispatch( fetchRacesSuccess( response.payload.data ) )
        : dispatch( fetchRacesFailure( response.payload.data ) )
    })
    .catch(err => console.log(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RaceContainer))
