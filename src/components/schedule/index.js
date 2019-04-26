import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSchedule } from '../../actions/scheduleActions'
import Loading from '../commons/loading'
import Img from './img'
import RaceInfo from './raceInfo'
import {
  UserLink,
  ClassImg,
  Info,
  Buttons,
  Button,
  Status,
  Day,
  Wrapper,
  Participants,
  Li,
  Ul,
} from './style'
import { selectImg } from '../../helpers/switchClassImage'
import Event from './event'


class Schedule extends Component {
  componentDidMount(){
    if(this.props.user.token){
      this.props.fetchSchedule(this.props.user.token)
    }
    else{
      this.props.fetchSchedule()
    }
  }


  showEvents = (schedule) => {
      return schedule.map((date) => {
              return (
                [<Day key={ date._id }>{date._id}</Day>].concat(date.events.map( (event, index) => {
                  let timezoneOffset = new Date().getTimezoneOffset() * 60000
                  let fecha = new Date(event.timestamp_start * 1000)
                  let now = new Date(new Date(Date.now() - timezoneOffset).toLocaleString('en-US', {timeZone: "America/Sao_Paulo"}))
                  let sponsorAvailable = ((fecha - now) / 1000) < 1800 ? true : false
                  let hideInfo = true
                    return( 
                      <Event sponsorAvailable={ sponsorAvailable } info={ event } />
                    )
                  } )
              ))
            })
  }

  showInfo = (info, hide) => {
    return(
      <Ul hide>
          { info.cdc ? <li style={{ background: 'goldenrod', 'border-radius': '5px', 'text-align': 'center' }}> Corrida dos Campeões</li>: null }
          <li>Largada: {info.starttypes[0]}</li>
          <li>Fim corrida: {info.racefinishes[0]}</li>
          <li>T. Livre: {info.session[0]}</li>
          <li>Classificação: {info.session[1]}</li>
          <li>Voltas Clas.: {info.session[2]}</li>
          <li>Tempo Corrida: {info.session[4]}</li>
          <li>Condição Pista: {info.trackconds[0]}</li>
          <li>Progressão Pista: {info.trackprogresses[0]}</li>
          <li>Dano: {info.damages[0]}</li>
          <li>Setup Fixo: {info.fixsetups[0]}</li>
          <li>Upgrade Fixo: {info.fixupgrades[0]}</li>
          <li>C. Tração: {info.help[0]}</li>
          <li>ABS: {info.help[1]}</li>
          <li>Auto Embreagem: {info.help[2]}</li>
          <li>Auto Blip: {info.help[4]}</li>
          <li>Max Players: {info.maxplayers}</li>
          <li>Horário Virtual: { ('00'+info.starttime[0]).slice(-2)+':'+('00'+info.starttime[1]).slice(-2)     }</li>
          <li>Visão Piloto: {info.carviews[0]}</li>
          <li>Regras: {info.flags[0]}</li>
          <li>Consumo Pneus/Comb: {info.fueltires[0]} </li>
          <li>Falhas Mec.: {info.mechfailures[0]}</li>
          <li>Retorno Pits: {info.pitreturns[0]}</li>
          <li>Escala Tempo: {info.timescales[0]}</li>
      </Ul>

    )

  }
  render(){
    let schedule = this.props.state.schedule
    if( this.props.state.loading ){
      return <Loading />
    }
    return ( 
        <Wrapper>
          { this.showEvents(schedule) }
        </Wrapper>
       )
  }
}


const mapStateToProps = state => ({ state: state.scheduleReducer, user: state.userReducer }) 
const mapDispatchToProps = dispatch => ({
  fetchSchedule: (token) => {
    dispatch( fetchSchedule(token) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
