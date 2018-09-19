import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRanking, fetchRankingSuccess, fetchRankingFailure } from '../../actions/getRanking'
import style from 'styled-components'
import { device } from '../../device'


class Ranking extends Component {

  componentWillMount() {
    if(this.props.state.rank.length === 0) {
      this.props.fetchRanking()
    }
  }

  render() {
    return(
      <Table>
        <Thead>
        <tr>
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
        </tr>
        </Thead>
        <Tbody>
        { this.props.state.rank.map((driver, index) =>
          <Tr key={ driver.id }>
            <Td> { index + 1 }</Td>
            <Td><UserLink to={'users/' + driver.id}> { driver.Name }</UserLink> </Td>
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

const Img = style.img`
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'inline'}
  }
  @media ${device.laptop}{
  display: block;
  }
`
const Table = style.table`
  border-collapse: collapse;
  margin: 0 auto;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 75%;
  }
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
  @media ${device.mobileS}{
    ${props => props.hide ? 'font-size: 0px' : 'font-size: 0.8em'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    font-size: 1em;
    padding: 0.5em 0.8em;
  }

`
const Th = style.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 0.8em 1em;
  @media ${device.mobileS}{
    ${props => props.hide ? 'font-size: 0px' : 'font-size: 0.8em'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    font-size: 1em;
    padding: 0.5em 0.8em;
  }

`

const Tr = style.tr`
  background: white;
  &:nth-child(odd){
  background: #f2f2f2;
  }
`

const UserLink = style(Link)`
  color: black
  text-decoration: none
`
//this must be deleted when api return us a ordered list
const sortRank = rank => {
  return rank.slice().sort((a, b) => b.Points - a.Points)
}
