import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  fetchDriver,
  fetchDriverSuccess,
  fetchDriverFailure,
} from '../../actions/driverActions'
import Chart from '../chart'
import { STATES } from '../../statesBr'


class Profile extends Component{

  componentDidMount(){
    let driverId = this.props.id
    this.props.fetchDriver(driverId)
  }

  render(){
    let driver = this.props.driver
    let user = this.props.user
    console.log(driver)
    return(
      <Wrapper>
        <ProfileBox>
          <Avatar src={driver.avatar} alt='avatar' />
          <StatsSection>
            <Name>{driver.unique_name}</Name>
            <Table>
              <Thead>
                <tr>
                  <Th>Points</Th>
                  <Th>Incidents</Th>
                  <Th>Poles</Th>
                  <Th>Corridas</Th>
                  <Th>Top3</Th>
                  <Th>Vitórias</Th>
                </tr>
              </Thead>
              <Tbody>
                <tr>
                  <Td>{ driver.points }</Td> 
                  <Td> {driver.incidents}</Td>
                  <Td> {driver.pole}</Td>
                  <Td> {driver.races_done}</Td>
                  <Td> {driver.top10[1] + driver.top10[2] + driver.top10[3]}</Td>
                  <Td> {driver.top10[1]}</Td>
                </tr>
              </Tbody>
            </Table>
            <Title>Informação</Title>
            <Information>
              <Li><Data>Nome, Sobrenome:</Data> {driver.name}, {driver.lastname}</Li>
              <Li><Data>Sexo:</Data> {driver.gender === 'M' ? 'Homem' : 'Mulher'}</Li>
              <Li><Data>Data de Nascimento:</Data> {driver.birthday}</Li>
              <Li><Data>Classe:</Data> <ImgClass alt='classImg' src={'data:image/png;base64,' + driver.classimg}/></Li>
              <Li><Data>Estado, Cidade:</Data> {STATES.map(state => { return state.value === driver.state ? state.name : '' })}, {driver.city}</Li>
              <Li><Data>Cadastrou-se em:</Data> {driver.email_confirmed}</Li>
              <Li><Data>Sobre mim:</Data> {driver.about}</Li>
            </Information>
        <Phrase>{driver.phrase}</Phrase>
      {
        user.logged && user.userId === this.props.id ?
      <Button to={'/users/' + user.userId}>Edit</Button>
        : <Button type='warning'to='/'>Report User</Button>
      }
          </StatsSection>
        </ProfileBox>
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
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: 0;
  background: #f5e6b5;
  color: #665723;
  text-align: center;
`

const Button = styled(NavLink)`
  margin-left: auto;
  margin-top: auto;
  height: 15px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  background: ${props => props.type === 'warning' ? '#DC143C' : '#337ab7'}
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 3px;
  color: white;
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
  margin: 10px;
  padding: 5px;
  text-align: center;
`

const Th = styled.th`
  margin: 10px;
  padding: 5px;
`

const Table = styled.table`
  margin: 0;
  padding: 5px;
  font-size: 1em;
  width: 100%;
  background: #7FFFD4
  color: black;

`

const StatsSection = styled.div`
  font-size: 1em;
  border-radius: 5px;
  margin-left: 5px;
  display: flex;
  flex-flow: row wrap;
`

const Information = styled.ul`
  display: flex;
  flex-flow:row wrap;
  list-style-type: none
  margin-top: 5px;
`
const Li = styled.li`
  flex: 1 2 40%;
  padding: 5px;
  font-size: 0.9em;
`

const Wrapper = styled.div`
  width: 77%;
  background: #f4f4f4
  margin: 0 auto;
  margin-top: 90px
`

const ProfileBox = styled.div`
  box-shadow:  0 0 10px 5px rgba(0, 0, 0, 0.19);
  background: white
  padding: 5px
  border-radius: 5px
  display: flex;
  max-height: 350px;
`
const Avatar = styled.img`
  height: 300px;
  border-radius: 5px
`
const mapStateToProps = state => ({ driver: state.driverReducer.driver, user: state.userReducer })
const mapDispatchToProps = dispatch => ({
  fetchDriver: (id) => {
    dispatch( fetchDriver(id) )
      .then((response) => {
        !response.error ?
          dispatch(fetchDriverSuccess( response.payload.data ))
        : dispatch(fetchDriverFailure(response.payload.data))
      })
      .catch( err => console.error(err) )
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
