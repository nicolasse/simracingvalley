import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSchedule } from '../../actions/scheduleActions'
import { Table, Tbody, Thead, Td, Th, Tr } from '../commons/table'
import Loading from '../loading'
import FontAwesome from 'react-fontawesome'
import Img from './img'

import styled from 'styled-components'

class Schedule extends Component {
  componentDidMount(){
    if(this.props.user.token){
      this.props.fetchSchedule(this.props.user.token)
    }
    else{
      this.props.fetchSchedule()
    }
  }
  lockIcon= () => {
    return <FontAwesome
    name='lock'
    title='only logged users'  
    />
  }
  render(){
    let schedule = this.props.state.schedule
    if( this.props.state.loading ){
      return <Loading />
    }
/*    return(
      <Table>
        <Thead>
          <Tr style={{background: 'white'}}>
            <Th>Car</Th>
            <Th>Track</Th>
            <Th hide>Date</Th>
            <Th hide>Time</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
      {
        schedule.map( (race, index)  => {
          return (<Tr key={race._id} cdc={ race.cdc }>
                    <Td>{ race.cars[0] }</Td>
                    <Td>{ race.tracks[0] }</Td>
                    <Td hide>{ race.date }</Td>
                    <Td hide>{race.time}</Td>
                    <Td>
                      <Password>
                        { race.password || race.password === ""
                          ? race.password
                          : this.lockIcon()
                        }
                      </Password>
                    </Td>
                  </Tr>)
        })
      }
        </Tbody>
      
      </Table>
    )*/
    return ( 
            schedule.map((date) => {
              return (
                [<Date>{date._id}</Date>].concat(
                  date.events.map( (event) => {
                    return( <Img race={event}/>)
                  } )
                  )
              )
            })
       )
  }
}

const Date = styled.span`
  font-size: 1.5em;
  text-decoration: underline;
`

const Password = styled.div`
  font-style: italic;
  background: white;
  border: 1px grey solid;
  border-radius: 3px;
  height: 1em;
`

const mapStateToProps = state => ({ state: state.scheduleReducer, user: state.userReducer }) 
const mapDispatchToProps = dispatch => ({
  fetchSchedule: (token) => {
    dispatch( fetchSchedule(token) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
