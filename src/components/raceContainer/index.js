import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRaces } from '../../actions/getRaces'
import Paginator from '../paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'

import styled from 'styled-components'
import { device } from '../../device'

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
    let totalPages = this.props.pages
    return(
      <Wrapper>
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

const Wrapper = styled.div`
  @media ${device.mobileS}{
  margin: 50px auto;
  width: 100%;
  }
  @media ${device.laptop}{
  margin: 20vh auto;
  width: 100%;
  }
`

const mapStateToProps = state => ({ races: state.racesReducer.races, pages: state.racesReducer.pages })
const mapDispatchToProps = dispatch => ({
  fetchRaces: (page) => {
    dispatch( fetchRaces(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RaceContainer))
