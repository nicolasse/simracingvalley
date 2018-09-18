import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Stats extends Component {
  render(){
    var stats = this.props.stats || []
    return(
      <div style={{display: 'block'}}>
      { stats.length === 0 ?  <Img>select a driver... <img alt='SIM RACING VALLEY' src={require('../../images/logoBlack.png')}/></Img>
      : <Table>
        <Thead>
          <tr>
            <Th>Pos</Th>
            <Th>Carga</Th>
            <Th>S1</Th>
            <Th>S2</Th>
            <Th>S3</Th>
            <Th>Tempo</Th>
          </tr>
        </Thead>
        <Tbody>
          {stats.map((lap, index) =>
            <Tr key={index}>
              <Td>{lap.position}</Td>
              <Td>{ lap.fuel }</Td>
              <Td best={lap.bests1}> { lap.s1 }</Td>
              <Td best={lap.bests2}> { lap.s2 }</Td>
              <Td best={lap.bests3}> { lap.s3 }</Td>
              <Td best={lap.bestlap}> { getString(lap.laptime) }</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      }
      </div>
    )
  }
}

const getString = time => {
  return time.search('ALERTA') === -1 ? time :  '--:--:--:---'
}

const Img = styled.div`
  float: left;
  width: 100%;
  margin: auto;
  background: #7FFFD4
  display: inline-block;

`
const Table = styled.table`
  display: block;
  width: 50%;
  float: left;
  margin: 0 auto;
  border-collapse: collapse;
`
const Thead = styled.thead`
  width: 100%;
  overflow: auto;
  background: #fff;
`

const Tbody = styled.tbody`
  overflow: auto;
  margin-top: 50px;
`
const Td = styled.td`
  text-align: ${props => props.right ? 'right' : 'left'};
  padding: 0.8em 0.5em;
  vertical-align: top;
  color: ${props => props.best ? 'green' : 'black'}
`
const Th = styled.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 0.8em 0.5em;

`

const Tr = styled.tr`
  background: white;
  border: 1px solid grey;
`
const mapStateToProps = state => ({ stats: state.raceReducer.stats })

export default connect(mapStateToProps, null)(Stats)
