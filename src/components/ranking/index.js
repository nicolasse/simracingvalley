import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRanking } from '../../actions/getRanking'
import { toggleLoading } from '../../actions/navbarActions'
import Paginator from '../commons/paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'
import Loading from '../commons/loading'
import {selectImg} from '../../helpers/switchClassImage' 
import FilterName from './filter'
import FontAwesome from 'react-fontawesome'
import { Wrapper, Img, UserLink } from './style'


const first = require('../../images/position/1st.png')
const second = require('../../images/position/2nd.png')
const third = require('../../images/position/3rd.png')
const fourth = require('../../images/position/4th.png')
const fifth = require('../../images/position/5th.png')

class Ranking extends Component {
  state= {
    actualPage: 0,
    showFilter: false,
  }

  componentDidMount() {
    this.props.fetchRanking(0)
  }

  handleClick = paginatorObj => {
    let page = paginatorObj.selected
    this.setState({actualPage: page})
    this.props.fetchRanking(page)
  }

  filterToggle = ( show ) => {
    this.setState( { showFilter: show })
  }

  render() {
    let ranking = this.state.showFilter ? this.props.state.found : this.props.state.rank
    return(
      <Wrapper>
      <FilterName filterToggle= {this.filterToggle}/>
      { this.props.state.loading
        ? <Loading /> 
        : <Table>
          <Thead>
            <Tr style={{background: 'white'}}>
              <Th>#</Th>
              <Th>Nome</Th>
              <Th>Pontos</Th>
              <Th hide><img src={first}/></Th>
              <Th hide><img src={second}/></Th>
              <Th hide><img src={third}/></Th>
              <Th hide><img src={fourth}/></Th>
              <Th hide><img src={fifth}/></Th>
              <Th hide><FontAwesome name='thumbs-up' /></Th>
              <Th>Corridas</Th>
              <Th>Incidentes</Th>
              <Th center hide>Classe</Th>
            </Tr>
          </Thead>
          <Tbody>
            { ranking.map((driver, index) =>
              <Tr key={ driver.id }>
                <Td> {driver.Position }</Td>
                <Td><UserLink to={'drivers/' + driver.id}> { driver.Name }</UserLink> </Td>
                <Td right> { driver.Points } </Td>
                <Td right hide> { driver.First } </Td>
                <Td right hide> { driver.Second } </Td>
                <Td right hide> { driver.Third } </Td>
                <Td right hide> { driver.Fourth } </Td>
                <Td right hide> { driver.Fifth } </Td>
                <Td right hide> { driver.votes }</Td>
                <Td right> { driver.Races } </Td>
                <Td right> { driver.Incidents } </Td>
                <Td right>  <Img hide alt='classe' src={selectImg(driver.Class)} /> </Td>
              </Tr>
              )
            }
          </Tbody>
        </Table>
      }
      <Paginator 
        pageCount={ this.props.state.pages }
        pageRangeDisplayed={ 3 }
        marginPagesDisplayed={ 1 }
        onPageChange={this.handleClick}
      />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({state: state.rankingReducer})

const mapDispatchToProps = dispatch => ({
  fetchRanking: (page) => {
    dispatch( fetchRanking(page) )
  },
  toggleLoading: () => dispatch(toggleLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)

