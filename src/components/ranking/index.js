import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRanking } from '../../actions/getRanking'
import { toggleLoading } from '../../actions/navbarActions'
import styled from 'styled-components'
import { device } from '../../device'
import Paginator from '../paginator'
import { Table, Thead, Tbody, Td, Th, Tr  } from '../commons/table/index.js'
import Loading from '../commons/loading'


const campeao = require('../../images/classes/campeao.png')

class Ranking extends Component {
  state= {
    actualPage: 0,
  }

  componentDidMount() {
    this.props.fetchRanking(0)
  }

  handleClick = page => {
    this.setState({actualPage: page})
    this.props.fetchRanking(page)
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.actualPage !== this.state.actualPage)
      return false
    return true
  }
  */
  render() {
    return(
      <Wrapper>
      { this.props.state.loading
        ? <Loading /> 
        : <Table>
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
                <Td> {driver.Position }</Td>
                <Td><UserLink to={'drivers/' + driver.id}> { driver.Name }</UserLink> </Td>
                <Td right> { driver.Points } </Td>
                <Td right hide> { driver.First } </Td>
                <Td right hide> { driver.Second } </Td>
                <Td right hide> { driver.Third } </Td>
                <Td right hide> { driver.Fourth } </Td>
                <Td right hide> { driver.Fifth } </Td>
                <Td right> { driver.Races } </Td>
                <Td right> { driver.Incidents } </Td>
                <Td>  <Img hide alt='classe' src={selectImg(driver.Class)} /> </Td>
              </Tr>
              )
            }
          </Tbody>
        </Table>
      }
      <Paginator selectPage={this.handleClick} pages={this.props.state.pages} />
      </Wrapper>
    )
  }
}

const selectImg = (img) => {
  switch(img){
    case 'campeao.png': return require('../../images/classes/campeao.png')
    case 'amador.png': return require('../../images/classes/amador.png')
    case 'aprendiz.png': return require('../../images/classes/aprendiz.png')
    case 'desafiante.png': return require('../../images/classes/desafiante.png')
    case 'junior.png': return require('../../images/classes/junior.png')
    case 'nao_ranqueado.png': return require('../../images/classes/nao_ranqueado.png')
    default: return
  }
}

const Wrapper = styled.div`
  @media ${device.mobileS}{
    width: 100%;
  margin: 0 auto 0 auto;
  }
  @media ${device.laptop}{
    width: 100%;
  margin: 2vh auto 0 auto;
  }
`
const mapStateToProps = state => ({state: state.rankingReducer})

const mapDispatchToProps = dispatch => ({
  fetchRanking: (page) => {
    dispatch( fetchRanking(page) )
  },
  toggleLoading: () => dispatch(toggleLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)

const Img = styled.img`
  width: 300px;
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'inline'}
  }
  @media ${device.laptop}{
  display: block;
  }
`
const UserLink = styled(Link)`
  color: black
  text-decoration: none
`
