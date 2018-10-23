import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchHistoric,
  fetchHistoricSuccess,
  fetchHistoricFailure,
  fetchIncidents,
  fetchIncidentsSuccess,
  fetchIncidentsFailure,
} from '../../actions/driverActions'
import { Radar, Line } from 'react-chartjs-2'
import styled from 'styled-components'


const radarLabels = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', 'Poles']

class Chart extends Component {

  componentDidMount(){
    let steamID = this.props.steamID
    this.props.fetchHistoric(steamID)
    this.props.fetchIncidents(steamID)
  }

  datasetKeyProvider(){ return Math.random();  }

  render(){
    let driver = this.props.driver
    return(
      <Wrapper>
        <br />
              <Radar 
                data={
                  {
                    labels: radarLabels,
                    datasets:[
                      {
                        label: 'TOP10 & POLES',
                        data: [...jsonToArray(driver.top10), driver.pole],
                        borderColor: '#3dfff4' 
                      }
                    ]
                  }
                }
                options={{
                  scale:{
                    ticks: {
                      beginAtZero: true,
                      stepSize: 1,
                    }
                  }
                }}
                datasetKeyProvider= {this.datasetKeyProvider}
              />
              <br />
              <br />
              <Line 
                data={
                  {
                    labels: driver.ratingHistoric.labels,
                    datasets:[
                      { 
                        ...driver.ratingHistoric.datasets[0],
                        borderColor: '#3dfff4'},
                      { 
                        ...driver.ratingHistoric.datasets[1],
                        borderColor: 'yellow'}
                   ]
                  }
                }
                datasetKeyProvider= {this.datasetKeyProvider}

                options = {{
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                      }
                    }]
                  }
                }}
              />
              <br />
              <br />
              <Line data={
                {
                  labels: driver.incidentsHistoric.labels,
                  datasets: [
                    {
                      ...driver.incidentsHistoric.datasets[0],
                      borderColor: 'red'
                    }
                  ]
                }
              }
                options = {{
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                      }
                    }]
                  }
                }}
                datasetKeyProvider= {this.datasetKeyProvider}
                />
      </Wrapper>
    )
  }
}

const Wrapper  = styled.div`
  flex-direction: column;
  margin: auto;
  padding: 30px;


`
const jsonToArray = obj => {
  let arr = []
  for(let i=1; i<=10; i++){
    arr.push(obj[i])
  }
  return arr
}

const mapStateToProps = state => ({ driver: state.driverReducer.driver })
const mapDispatchToProps = dispatch => ({
  fetchHistoric: (steamID) => { dispatch(fetchHistoric(steamID)).then((response) => {
    !response.error ?
      dispatch(fetchHistoricSuccess(response.payload.data))
      :dispatch(fetchHistoricFailure(response.payload.data))
  })
  .catch(err => console.error(err))},
  fetchIncidents: (steamID) => { dispatch(fetchIncidents(steamID)).then((response) => {
    !response.error ?
      dispatch(fetchIncidentsSuccess(response.payload.data))
      :dispatch(fetchIncidentsFailure(response.payload.data))
  }).catch(err => console.error(err)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
