import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  fetchDriver,
  fetchDriverSuccess,
  fetchDriverFailure,
} from '../../actions/driverActions'
import Chart from '../chart'


class Profile extends Component{

  componentDidMount(){
    let driverId = this.props.id
    this.props.fetchDriver(driverId)
  }

  render(){
    let driver = this.props.driver
    let user = this.props.user
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
                  <Td>{ this.props.driver.points }</Td> 
                  <Td> {this.props.driver.incidents}</Td>
                  <Td> {this.props.driver.pole}</Td>
                  <Td> {this.props.driver.races_done}</Td>
                  <Td> {this.props.driver.top10[1] + this.props.driver.top10[2] + this.props.driver.top10[3]}</Td>
                  <Td> {this.props.driver.top10[1]}</Td>
                </tr>
              </Tbody>
            </Table>
            <Title>Informação</Title>
            <Information>
              <Li>{driver.unique_name}</Li>
              <Li><ImgClass alt='classImg' src={'data:image/png;base64,' + driver.classimg}/></Li>
              <Li>{driver.gender}</Li>
              <Li>{driver.birthday}</Li>
              <Li>{driver.state}</Li>
              <Li>{driver.cadastrado}</Li>
            </Information>
      {
        user.logged && user.userId === this.props.id ?
      <Link to={'/users/' + user.userId}>Edit</Link>
        : <div>report</div>
      }
          </StatsSection>
        </ProfileBox>
        {
          driver.steam_id ?
            <Chart steamID={driver.steam_id}/>
          : <div>LOADING</div>
        }
      </Wrapper>
    )
  }
}

const Title = styled.h1`
  font-size: 1.2em;
`

const Name = styled.h1`
  font-size: 1.5em;
  color: white;
  background: black;
  width: 100%
`
const Tbody = styled.tbody`
  margin: 10px;
  padding: 10px;
`
const Thead = styled.thead`
  width: 100%;

`

const ImgClass = styled.img`
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
  width: 100%;
  border-radius: 5px;
  margin-left: 5px;
`

const Information = styled.ul`
  padding: 0.5em;
  margin: 1em;
  list-style-type: none
`
const Li = styled.li`
  margin: 0.5em;
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
`
const Avatar = styled.img`
  height: 100%;
  width: 40%;
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
