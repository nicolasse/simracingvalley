import React, { Component } from 'react'
import { Radar, Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { device } from '../../device'
import { mainColor, boldColor } from '../commons/style'


const radarLabels = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', 'Poles']

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
                        borderColor: mainColor 
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
                        borderColor: mainColor},
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
                      borderColor: mainColor,
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
                borderColor: '#87e29e'
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
			 callback: function(tickValue, index, ticks) {
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


const Content = styled.div`
  @media ${device.mobileS}{
  height: 80vh;
  }
  @media ${device.laptop}{
  height: 500px;
  }
`
const Wrapper  = styled.div`
  flex-direction: column;
  margin: auto;
  @media ${device.mobileS}{
    padding: 5px;
  }
  @media ${device.laptop}{
    padding: 30px;
  }

`
const jsonToArray = obj => {
  let arr = []
  for(let i=1; i<=10; i++){
    arr.push(obj[i])
  }
  return arr
}

export default Chart
