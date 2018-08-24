import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRanking, fetchRankingSuccess, fetchRankingFailure } from '../../actions/getRanking'
import style from 'styled-components'


class Ranking extends Component {

  componentWillMount() {
    this.props.fetchRanking()
  }

  render() {
    return(
      <Table>
        <thead>
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
          <Th>Classe</Th>
        </tr>
        </thead>
        <tbody>
        { this.props.rank.map((driver, index) =>
          <Tr key={ index }>
            <Td> { index + 1 }</Td>
            <Td> { driver.Name } </Td>
            <Td> { driver.Points } </Td>
            <Td> { driver.First } </Td>
            <Td> { driver.Second } </Td>
            <Td> { driver.Third } </Td>
            <Td> { driver.Fourth } </Td>
            <Td> { driver.Fifth } </Td>
            <Td> { driver.Races } </Td>
            <Td> { driver.Incidents } </Td>
            <Td>  <img alt='classe' src={'data:image/png;base64,' + driver.Class} /> </Td>
          </Tr>
        )
        }
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({rank: state.rankingReducer.rank})

const mapDispatchToProps = dispatch => ({
  fetchRanking: () => {
    dispatch( fetchRanking() ).then((response) => {
      !response.error ?
        dispatch(fetchRankingSuccess( response.payload.data ))
        : dispatch(fetchRankingFailure( response.payload.data ))
  })
    .catch(err => console.error(err))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)

const Table = style.table`
 border-collapse: collapse;
 width: 80%;
 margin: 0 auto;
`

const Td = style.td`
  text-align:left;
  padding: 0.8em 1em;
`
const Th = Td

const Tr = style.tr`
  background: white;
  &:nth-child(odd){
  background: #f2f2f2;
  }
`

