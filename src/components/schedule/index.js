import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSchedule } from '../../actions/scheduleActions'
import { Table, Tbody, Thead, Td, Th, Tr } from '../commons/table'
import Loading from '../commons/loading'
import FontAwesome from 'react-fontawesome'

import styled from 'styled-components'

class Schedule extends Component {
  componentDidMount(){
    this.props.fetchSchedule(this.props.user.token)
  }
  lockIcon= () => {
    return <FontAwesome
    name='lock'
    title='only logged users'  
    />
  }
  render(){
    console.log(this.props.state)
    let schedule = this.props.state.schedule
    if( this.props.state.loading ){
      return <Loading />
    }
    return(
      <Table>
        <Thead>
          <Tr>
            <Th>Car</Th>
            <Th>Track</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
      {
        schedule.map( (race, index)  => {
          return (<Tr>
                    <Td>{ race.cars[0] }</Td>
                    <Td>{ race.tracks[0] }</Td>
                    <Td>{ race.date }</Td>
                    <Td>{race.time}</Td>
                    <Td>{ race.password ? race.password : this.lockIcon() }</Td>
                  </Tr>)
        })
      }
        </Tbody>
      
      </Table>
    )
  }
}

const mapStateToProps = state => ({ state: state.scheduleReducer, user: state.userReducer }) 
const mapDispatchToProps = dispatch => ({
  fetchSchedule: () => {
    dispatch( fetchSchedule() )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
