import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchDriver,
} from '../../actions/driverActions'
import Chart from './chart'
import { STATES } from '../../statesBr'
import { selectImg } from '../../helpers/switchClassImage'
import Achievements from './achievements'
import FontAwesome from 'react-fontawesome'
import Loading from '../commons/loading'
import {
  Avatar,
  ProfileBox,
  Wrapper,
  Li, 
  Information,
  StatsSection,
  Table,
  Th,
  Td,
  Thead,
  Tbody,
  ImgClass,
  Name,
  Title,
  Button,
  Data,
  Phrase
} from './style'

const gender = {
  M: 'Homem',
  F: 'Mulher',
}

class Profile extends Component{

  componentWillMount(){
    this.props.fetchDriver(this.props.id)
  }

  componentDidUpdate(prevProps){
    if(this.props.id !== prevProps.id){
      this.props.fetchDriver(this.props.id)
    }
  }

  render(){
    let driver = this.props.driver
    let user = this.props.user
    if(this.props.loading){
      return(<Loading />)
    }
    else
    return(
      <Wrapper>
        <ProfileBox>
          <Avatar src={driver.avatar} alt='Avatar not loaded' />
          <StatsSection>
            <Name>{driver.unique_name}</Name>
            <Table>
              <Thead>
                <tr>
                  <Th>Pos</Th>
                  <Th>Points</Th>
                  <Th>Incidents</Th>
                  <Th>Poles</Th>
                  <Th>Corridas</Th>
                  <Th>Top3</Th>
                  <Th>Vitórias</Th>
                  <Th hide><FontAwesome name='thumbs-up' /></Th>
                </tr>
              </Thead>
              <Tbody>
                <tr>
                  <Td>{ driver.rank_pos }</Td> 
                  <Td>{ driver.points }</Td> 
                  <Td> {driver.incident_ave}</Td>
                  <Td> {driver.pole}</Td>
                  <Td> {driver.races_done}</Td>
                  <Td> {driver.top10[1] + driver.top10[2] + driver.top10[3]}</Td>
                  <Td> {driver.top10[1]}</Td>
                  <Td hide> {driver.votes}</Td>
                </tr>
              </Tbody>
            </Table>
            <Title>Informação</Title>
            <Information>
              <Li><Data>Nome, Sobrenome:</Data> {driver.name}, {driver.lastname}</Li>
              <Li><Data>Sexo:</Data> { gender[driver.gender] }</Li>
              <Li><Data>Data de Nascimento:</Data> {driver.birthday}</Li>
              <Li><Data>Classe:</Data> <ImgClass alt='classImg' src={selectImg( driver.classimg )}/></Li>
              <Li><Data>Estado, Cidade:</Data> {STATES.map(state => { return state.value === driver.state ? state.name : '' })}, {driver.city}</Li>
              <Li><Data>Cadastrou-se em:</Data> {driver.email_confirmed}</Li>
              <Li><Data>Sobre mim:</Data> {driver.about}</Li>
            </Information>
        <Phrase hide={!driver.phrase}>{driver.phrase}</Phrase>
        {
          user.logged  ? 
            user.userId === this.props.id ?
            <Button to={'/users/' + user.userId}>Edit</Button>
            : <Button type='warning'to='/'>Report User</Button>
          : null
        }
          </StatsSection>
        </ProfileBox>
      { driver.achievements 
        ? <Achievements achievements={driver.achievements}/>
        : null }
        {driver.steam_id ? <Chart driver={driver}/>: 'LOADING..' }
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({loading: state.driverReducer.loading, driver: state.driverReducer.driver, user: state.userReducer })
const mapDispatchToProps = dispatch => ({
  fetchDriver: (id) => {
    dispatch( fetchDriver(id) )
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
