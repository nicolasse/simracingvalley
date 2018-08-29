import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRanking, fetchRankingSuccess, fetchRankingFailure } from '../../actions/getRanking'
import style from 'styled-components'


class Ranking extends Component {

  componentWillMount() {
    if(this.props.state.rank.length === 0) {
      this.props.fetchRanking()
    }
    console.log(this.props.state)
  }

  render() {
    return(
      <Table>
        <Thead>
        <tr>
          <Th>#</Th>
          <Th>Nome</Th>
          <Th>Pontos</Th>
          <Th>1</Th>
          <Th>2</Th>
          <Th>3</Th>
          <Th>4</Th>
          <Th>5</Th>
          <Th>Corridas</Th>
          <Th>Incidentes</Th>
          <Th center>Classe</Th>
        </tr>
        </Thead>
        <Tbody>
        { this.props.state.rank.map((driver, index) =>
          <Tr key={ index }>
            <Td> { index + 1 }</Td>
            <Td> { driver.Name } </Td>
            <Td right> { driver.Points } </Td>
            <Td right> { driver.First } </Td>
            <Td right> { driver.Second } </Td>
            <Td right> { driver.Third } </Td>
            <Td right> { driver.Fourth } </Td>
            <Td right> { driver.Fifth } </Td>
            <Td right> { driver.Races } </Td>
            <Td right> { driver.Incidents } </Td>
            <Td>  <img alt='classe' src={'data:image/png;base64,' + driver.Class} /> </Td>
          </Tr>
        )
        }
        </Tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({state: state.rankingReducer})

const mapDispatchToProps = dispatch => ({
  fetchRanking: () => {
    dispatch( fetchRanking() ).then((response) => {
      !response.error ?
        dispatch(fetchRankingSuccess( sortRank(response.payload.data )))
        : dispatch(fetchRankingFailure( response.payload.data ))
  })
    .catch(err => console.error(err))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)

const Table = style.table`
  border-collapse: collapse;
  width: 90vw;
  margin: 0 auto;
`

const Thead = style.thead`
  width: 100%
  overflow: auto;
  background: #fff;
`

const Tbody = style.tbody`
  overflow: auto;
  margin-top: 50px;
`

const Td = style.td`
  text-align: ${props => props.right ? 'right' : 'left'};
  padding: 0.8em 1em;
  vertical-align: top;
`
const Th = style.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 0.8em 1em;

`

const Tr = style.tr`
  background: white;
  &:nth-child(odd){
  background: #f2f2f2;
  }
`
//this must be deleted when api return us a ordered list
const sortRank = rank => {
  return rank.slice().sort((a, b) => b.Points - a.Points)
}
