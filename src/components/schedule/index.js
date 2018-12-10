import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSchedule } from '../../actions/scheduleActions'
import { Table, Tbody, Thead, Td, Th, Tr } from '../commons/table'
import Loading from '../loading'
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
  render(){
    let schedule = this.props.state.schedule
    if( this.props.state.loading ){
      return <Loading />
    }
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

const mapStateToProps = state => ({ state: state.scheduleReducer, user: state.userReducer }) 
const mapDispatchToProps = dispatch => ({
  fetchSchedule: (token) => {
    dispatch( fetchSchedule(token) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
