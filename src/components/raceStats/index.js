import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearStats, fetchRace } from '../../actions/getRace'
import Event from './event'
import Stats from './stats'
import {
  Wrapper, 
  Col,
  ButtonEvent,
  Title,
  Content,
  Config,
  Span,
  Info
} from './style'

class Race extends Component {
  state = {
    filter: 'race',
    loading: true,
  }

  componentDidMount(){
    let raceId = this.props.id
    this.props.fetchRace( raceId )
    this.props.clearStats()
  }

  eventFilter(e){
    this.setState({filter: e})
    this.props.clearStats()
  }

  sortGrid = (event) => {
    return event.slice().sort(( a, b ) => a.position - b.position)
  }

  render() {
    let state = this.props.state
    let srvsettings = state.race.srvsettings
    return(
      <Wrapper>
        <ButtonEvent
          activated = {this.state.filter === 'race'} 
          onClick={() => this.eventFilter('race')}>
            Race
        </ButtonEvent>
        <ButtonEvent
          activated = {this.state.filter === 'qualify'} 
          onClick={() => this.eventFilter('qualify')}>
            Qualify
        </ButtonEvent>
        <ButtonEvent
          activated = {this.state.filter === 'practice'} 
          onClick={() => this.eventFilter('practice')}>
            Practice
        </ButtonEvent>
        <ButtonEvent
          activated = { this.state.filter === 'info' }
          onClick={ () => this.eventFilter('info') }>
          Info
        </ButtonEvent>
        <Content>
        <Col>
       <Title>{ this.state.filter.toUpperCase() }</Title>

      { 
        this.state.filter === 'info'
        ? <Info>
          { srvsettings.cdc ? <Config style={{ background: 'goldenrod', 'border-radius': '5px', 'text-align': 'center' }}> Corrida dos Campeões</Config>: null }
          <Config> <Span rated={state.race.rated}>{ state.race.rated ? 'CORRIDA RANQUEADA': 'CORRIDA NÃO RANQUEADA' }</Span></Config>
          <Config>Largada: {srvsettings.starttypes[0]}</Config>
          <Config>Fim corrida: {srvsettings.racefinishes[0]}</Config>
          <Config>T. Livre: {srvsettings.session[0]}</Config>
          <Config>Classificação: {srvsettings.session[1]}</Config>
          <Config>Voltas Clas.: {srvsettings.session[2]}</Config>
          <Config>Tempo Corrida: {srvsettings.session[4]}</Config>
          <Config>Condição Pista: {srvsettings.trackconds[0]}</Config>
          <Config>Progressão Pista: {srvsettings.trackprogresses[0]}</Config>
          <Config>Dano: {srvsettings.damages[0]}</Config>
          <Config>Setup Fixo: {srvsettings.fixsetups[0]}</Config>
          <Config>Upgrade Fixo: {srvsettings.fixupgrades[0]}</Config>
          <Config>C. Tração: {srvsettings.help[0]}</Config>
          <Config>ABS: {srvsettings.help[1]}</Config>
          <Config>Auto Embreagem: {srvsettings.help[2]}</Config>
          <Config>Auto Blip: {srvsettings.help[4]}</Config>
          <Config>Max Players: {srvsettings.maxplayers}</Config>
          <Config>Horário Virtual: { ('00'+srvsettings.starttime[0]).slice(-2)+':'+('00'+srvsettings.starttime[1]).slice(-2)     }</Config>
          <Config>Visão Piloto: {srvsettings.carviews[0]}</Config>
          <Config>Regras: {srvsettings.flags[0]}</Config>
          <Config>Consumo Pneus/Comb: {srvsettings.fueltires[0]} </Config>
          <Config>Falhas Mec.: {srvsettings.mechfailures[0]}</Config>
          <Config>Retorno Pits: {srvsettings.pitreturns[0]}</Config>
          <Config>Escala Tempo: {srvsettings.timescales[0]}</Config>
        </Info>
        : <Event 
          shouldMobileHide={state.stats.length > 0 ? true : false}
          event={this.sortGrid(state.race[this.state.filter])}
          isRace={this.state.filter === 'race'}
          raceId={state.race._id}
          />
      }
        </Col>
      {/*<Col >
          <Title hideOnMobile>STATS</Title>
          <Stats />
        </Col>*/}
        </Content>
      </Wrapper>
      )
  }
}

const mapStateToProps = state => ({ state: state.raceReducer })


const mapDispatchToProps = dispatch => ({
  fetchRace: ( id ) => {
    dispatch( fetchRace( id ))
  },
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Race)
