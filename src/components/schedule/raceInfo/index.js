import React, { Component } from 'react'
import { Ul } from './style'

class raceInfo extends Component {
  
  render(){
    let info = this.props.info
    return(

      <Ul hide={ this.props.hide }>
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
}

export default raceInfo
