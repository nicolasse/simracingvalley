import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRanking, fetchRankingSuccess, fetchRankingFailure } from '../../actions/getRanking'
import { toggleLoading } from '../../actions/navbarActions'
import style from 'styled-components'
import { device } from '../../device'
import Paginator from '../paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'


class Ranking extends Component {
  state= {
    actualPage: 0,
  }

  componentWillMount() {
    /*if(this.props.state.rank.length === 0) {
      this.props.fetchRanking()
    }*/
    this.props.fetchRanking(0)
  }

  handleClick = page => {
    this.props.fetchRanking(page)
    this.setState({actualPage: page})
  }
/*
  componentDidMount(){
    if(this.props.state.rank.length > 0){
      this.props.toggleLoading()
    }
  }
*/
  render() {
    return(
      <React.Fragment>
      <Table>
        <Thead>
        <Tr style={{background: 'white'}}>
          <Th>#</Th>
          <Th>Nome</Th>
          <Th>Pontos</Th>
          <Th hide>1</Th>
          <Th hide>2</Th>
          <Th hide>3</Th>
          <Th hide>4</Th>
          <Th hide>5</Th>
          <Th>Corridas</Th>
          <Th>Incidentes</Th>
          <Th center hide>Classe</Th>
        </Tr>
        </Thead>
        <Tbody>
        { this.props.state.rank.map((driver, index) =>
          <Tr key={ driver.id }>
            <Td> { (this.state.actualPage * 20) + index + 1 }</Td>
            <Td><UserLink to={'drivers/' + driver.id}> { driver.Name }</UserLink> </Td>
            <Td right> { driver.Points } </Td>
            <Td right hide> { driver.First } </Td>
            <Td right hide> { driver.Second } </Td>
            <Td right hide> { driver.Third } </Td>
            <Td right hide> { driver.Fourth } </Td>
            <Td right hide> { driver.Fifth } </Td>
            <Td right> { driver.Races } </Td>
            <Td right> { driver.Incidents } </Td>
            <Td>  <Img hide alt='classe' src={'data:image/png;base64,' + driver.Class} /> </Td>
          </Tr>
        )
        }
        </Tbody>
      </Table>
      <Paginator selectPage={this.handleClick} pages={this.props.state.pages} />
</React.Fragment>
    )
  }
}

const mapStateToProps = state => ({state: state.rankingReducer})

const mapDispatchToProps = dispatch => ({
  fetchRanking: (page) => {
    dispatch( fetchRanking(page) ).then((response) => {
      !response.error ?
        dispatch(fetchRankingSuccess(response.payload.data ))
        : dispatch(fetchRankingFailure( response.payload.data ))
  })
    .catch(err => console.error(err))
  },
  toggleLoading: () => dispatch(toggleLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)

const Img = style.img`
  width: 300px;
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'inline'}
  }
  @media ${device.laptop}{
  display: block;
  }
`
const UserLink = style(Link)`
  color: black
  text-decoration: none
`
