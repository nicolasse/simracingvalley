import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTracks, fetchCars, fetchRecords } from '../../actions/getRecords'
import { Table, Thead, Tbody, Td, Th, Tr } from '../commons/table'
import { mainBlue } from '../commons/style'
import { StyledLink, Wrapper, Select } from './style'

class Records extends Component {
  state ={
    trackSelected: '',
    carSelected: ''
  }

  componentDidMount(){
    this.props.fetchTracks()
  }

  showTracks = () => {
    let tracks = this.props.state.tracks
    let initial = [<option key='initialTrack'></option>]
    let trackOptions =  tracks.map( (track, index) => {
      return <option key={index} value={track}> {track}</option>
    } )
    return initial.concat(trackOptions)
  }

  showCars = () => {
    let cars = this.props.state.cars
    let initial = [<option key='initialCar'></option>]
    let carOptions = cars.map(( car, index ) => {
      return <option key={index} value={car}>{car}</option>
    })
    return initial.concat(carOptions)
  }

  handleTrackChange = (e) => {
    let track = e.target.value
    if(track !== ''){
      this.setState({trackSelected: track, carSelected: ''})
      this.props.fetchCars( track )
    }
  }

  handleCarChange = (e) => {
    let car = e.target.value
    this.setState({ carSelected: car })
    let track = this.state.trackSelected
    if(car !== '')
      this.props.fetchRecords( track, car )
  }


  showRecords(){
    let records = this.props.state.records
    if(records){
       return records.reverse().map((record, index) => {
         let color = index === 0 ? mainBlue : 'white'
        return(
            <Tr key={index} style={{ background: color }}>
              <Td><StyledLink record={index === 0} to={'races/'+ record.resultid}>{record.racedate}</StyledLink></Td>
              <Td><StyledLink record={ index === 0 } to={'drivers/'+ record.userid}> {record.username}</StyledLink></Td>
              <Td hide> {record.s1}</Td><Td hide> { record.s2 }</Td>
              <Td hide> {record.s3}</Td>
              <Td>{record.laptime}</Td>
            </Tr>
        )
      })
    }
  }

  render(){
    return(
      <Wrapper>
        <h2>Veja os records de cada pista no Simracing Valley</h2>
        <h4>Utilize o formulário abaixo para visualizar o(s) record(s) organizados por pistas e carros! (apenas para sessões de corrida)
        </h4>
        <h3>Será que seu nome consta nos registros abaixo?</h3>
      <Select onChange= {this.handleTrackChange}>
      {this.showTracks()}
      </Select>
      <Select value={this.state.carSelected} onChange={ this.handleCarChange } >
      {this.showCars()}
      </Select>
        
        <Table>
          <Thead >
            <Tr style={{background: 'white'}}>
              <Th>Data</Th>
              <Th>Piloto</Th>
              <Th hide>Parcial 1</Th>
              <Th hide>Parcial 2</Th>
              <Th hide>Parcial 3</Th>
              <Th>Tempo total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.showRecords()}
          </Tbody>
        </Table>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({state: state.recordsReducer })

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => {
      dispatch( fetchTracks() )
    },
    fetchCars: ( track ) => {
      dispatch( fetchCars( track ) )
    },
    fetchRecords: ( track, car ) => {
      dispatch( fetchRecords( track, car ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Records)
