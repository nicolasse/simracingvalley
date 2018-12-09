import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  fetchDriver,
} from '../../actions/driverActions'
import Chart from '../chart'
import { STATES } from '../../statesBr'
import { device } from '../../device'
import { mainBlue } from '../commons/style'
import { selectImg } from '../../helpers/switchClassImage'
import Achievements from './achievements'
import FontAwesome from 'react-fontawesome'
import Loading from '../loading'

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

const Data = styled.span`
  color: gray;
  font-size: 0.85em
`
const Phrase = styled.p`
 ${props => props.hide ? 'display: none': ''} 
  padding: 0.3em 2em;
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: 0;
  background: #f5e6b5;
  color: #665723;
  text-align: center;
  border-radius: 5px;

`

const Button = styled(NavLink)`
  margin-left: auto;
  margin-top: auto;
  height: 15px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  background: white;
  color: black;
  transition: all 0.3s linear;
  border: 1px solid black;
  &:hover{
    background: ${props => props.type === 'warning' ? '#DC143C' : '#337ab7'}
    color: white;
    transition: all 0.3s linear;
  }
  padding: 0.5em;
  border-radius: 3px;
`

const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0;
`

const Name = styled.h1`
  font-size: 1.5em;
  color: white;
  background: black;
  width: 100%
  margin-top: 5px;
  margin-bottom: 0;
`
const Tbody = styled.tbody`
  margin: 10px;
  padding: 10px;
`
const Thead = styled.thead`
  width: 100%;

`

const ImgClass = styled.img`
  max-width: 250px;
`
const Td = styled.td`
  @media${ device.mobileS }{
    ${props => props.hide 
    ? 'display: none'
    : 'display: table-cell'}
  }
  @media ${ device.laptop }{
    display: table-cell;
  }
  margin: 10px;
  padding: 5px;
  text-align: center;
`

const Th = styled.th`
  @media${ device.mobileS }{
    ${props => props.hide 
    ? 'display: none'
    : 'display: table-cell'}
  }
  @media ${ device.laptop }{
    display: table-cell;
  }
  margin: 1vw auto;
  padding: 0.5vw;
`

const Table = styled.table`
  margin: 0;
  padding: 0.5vw;
  font-size: 1em;
  width: 100%;
  background: ${mainBlue}
  color: white;

`

const StatsSection = styled.div`
  @media ${device.mobileS}{
   font-size: 0.8em;
   flex-flow: row wrap;
  }
  @media ${device.laptop}{
    font-size: 1em;
    flex-direction: row wrap;
  }
  border-radius: 5px;
  margin-left: 5px;
  display: flex;
`

const Information = styled.ul`
  display: flex;
  flex-flow:row wrap;
  list-style-type: none
  margin-top: 5px;
`
const Li = styled.li`
  @media ${device.mobileS}{
    flex: 1 0 90% 
  }
  @media ${device.mobileL}{
    flex: 1 2 40%;
  }
  padding: 5px;
  font-size: 0.9em;
`

const Wrapper = styled.div`
  @media ${device.mobileS}{
  }
  @media ${device.laptop}{
    margin-top: 90px
    margin: 0 auto;
  }
  background: #f4f4f4
`

const ProfileBox = styled.div`
  @media ${device.mobileS}{
    flex-direction: column;
    height: 100%;
  }
  @media ${device.mobileL}{
    flex-flox: row wrap;
  }
  @media ${device.laptop}{
    flex-direction: row;
    max-height: 350px;
  }
  box-shadow:  0 0 10px 5px rgba(0, 0, 0, 0.19);
  background: white
  padding: 5px
  border-radius: 5px
  display: flex;
`
const Avatar = styled.img`
  background: #f0f0f0;
  @media ${device.mobileS}{
  width: 200px;
  margin: 0 auto;
  }
  @media ${device.mobileM}{
    width: 100px;
    height: 100px;
  }
  @media ${device.laptop}{
  min-width: 300px;
  height: 300px;
  }
  border-radius: 5px
`
const mapStateToProps = state => ({loading: state.driverReducer.loading, driver: state.driverReducer.driver, user: state.userReducer })
const mapDispatchToProps = dispatch => ({
  fetchDriver: (id) => {
    dispatch( fetchDriver(id) )
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
