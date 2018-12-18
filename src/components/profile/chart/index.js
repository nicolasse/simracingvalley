import React, { Component } from 'react'
import { Radar, Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { mainBlue, boldBlue, mainGreen } from '../../commons/style'
import { Wrapper, Content } from './style'


const radarLabels = [
  '1st', '2nd', '3rd', '4th', '5th',
  '6th', '7th', '8th', '9th', '10th',
  'Poles']

class Chart extends Component {

  datasetKeyProvider(){ return Math.random();  }

  render(){
    let driver = this.props.driver
    return(
      <Wrapper>
        <br />
        <Content>
              <Radar
                data={
                  {
                    labels: radarLabels,
                    datasets:[
                      {
                        label: 'TOP10 & POLES',
                        data: [...jsonToArray(driver.top10), driver.pole],
                        borderColor: mainBlue 
                      }
                    ]
                  }
                }
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scale:{
                    ticks: {
                      beginAtZero: true,
                      stepSize: 1,
                    }
                  }
                }}
                datasetKeyProvider= {this.datasetKeyProvider}
              />
        </Content>
              <br />
              <br />
        <Content>
                 <Line 
                data={
                  {
                    labels: driver.ratingHistoric.labels,
                    datasets:[
                      { 
                        ...driver.ratingHistoric.datasets[0],
                        borderColor: mainBlue},
                      { 
                        ...driver.ratingHistoric.datasets[1],
                        borderColor: '#7DFFF4'}
                   ]
                  }
                }
                datasetKeyProvider= {this.datasetKeyProvider}

                options = {{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true,
                      }
                    }]
                  }
                }}
              />
        </Content>
              <br />
              <br />
        <Content>
              <Line data={
                {
                  labels: driver.incidentsHistoric.labels,
                  datasets: [
                    {
                      ...driver.incidentsHistoric.datasets[0],
                      borderColor: 'red'
                    },
                    {
                      ...driver.incidentsHistoric.datasets[1],
                      borderColor: mainBlue,
                    }
                  ]
                }
              }
                options = {{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true,
                      }
                    }]
                  }
                }}
                datasetKeyProvider= {this.datasetKeyProvider}
                />
        </Content>
        <br />
        <br />
        <Content>
      <Line  data={
        {
          labels: driver.rankingHistoric.labels,
            datasets: [
              { 
                ...driver.rankingHistoric.datasets[0],
                borderColor: mainGreen
              }
            ]
        }
      }
                options = {{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [{
                      ticks: {
                        maxTicksLimit: 20,
                        stepSize:1,
			 callback: (tickValue, index, ticks) => {
                          if(!(index % parseInt(ticks.length / 5))) {
                            return tickValue
                      }
                    }                    }
                    }]
                  }
                }}
                datasetKeyProvider= {this.datasetKeyProvider}
             
          />
        </Content>
      </Wrapper>
    )
  }
}


const jsonToArray = obj => {
  let arr = []
  for(let i=1; i<=10; i++){
    arr.push(obj[i])
  }
  return arr
}

export default Chart
