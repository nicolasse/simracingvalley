import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { clearStats, fetchRace } from '../../actions/getRace'
import Event from '../event'
import Stats from '../stats'
import { device } from '../../device'
import { mainColor } from '../commons/style'

class Race extends Component {
  state = {
    filter: 'race',
    loading: true,
  }

  componentDidMount(){
    let raceId = this.props.id
    this.props.fetchRace( raceId )
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

      { state.loading ? 'Loading':
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
        <Col>
          <Title hideOnMobile>STATS</Title>
          <Stats />
        </Col>
        </Content>
      </Wrapper>
      )
  }
}

const Info = styled.ul`
  font-size: 1.3em;
  margin: 0 auto 0 0;
  display: table;
`

const Span = styled.span`
  ${props => props.rated 
  ?'background: #66B756; color: white; border-radius: 5px; padding: 0.2em 1em'
  :'background: #FF7676; color: white; border-radius: 5px; padding: 0.2em 1em'}

`
const Config = styled.li`
  list-style-type: none;
  margin-bottom: 0.3em;

`

const Content = styled.div`
  width: 100%;
  @media ${device.mobileS}{
    display: block;
  }
  @media ${device.laptop}{
    display: flex;
  }
`

const Title = styled.h1`
  color: black;
  @media ${device.mobileS}{
    display: ${props => props.hideOnMobile ? 'none' : 'block'}
  }
  @media ${device.laptop}{
    display: block;
  }
`

const ButtonEvent = styled.button`
  ${ props => props.activated
  ? 'color: white; background:' +mainColor 
  : 'color: black; background: white' };
  @media${device.mobileS}{
    font-size: 1em;
  }
  @media${device.laptop}{
    font-size: 1.2em;
  
  }
  border: 1px solid black;
  margin: 10px 10px 10px 0;
  padding: 1em;

  &:active, &:hover {
   background: ${ mainColor };
   color: white;
  }

`

const Col = styled.div`
  @media ${device.mobileS}{
    width: 100%
    display: block;
  }
  @media ${ device.laptop }{
    width: 50%;
    float: left;
    display: flex;
    flex-flow: column;
  }
  margin: 0;
`

const Wrapper = styled.div`
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 100%;
  }
  margin: 0 auto;
`
const mapStateToProps = state => ({ state: state.raceReducer })


const mapDispatchToProps = dispatch => ({
  fetchRace: ( id ) => {
    dispatch( fetchRace( id ))
  },
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Race)
