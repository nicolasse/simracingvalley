import React, { Component } from 'react'
import styled from 'styled-components'
import { clearStats } from '../../actions/getRace'
import { connect } from 'react-redux'
import { device } from '../../device'
import { mainColor, boldColor } from '../commons/style'

class Stats extends Component {
  state = {
    hide: true,
  }

  handleClose(){
    this.setState({hide: true})
  }
  render(){
    var stats = this.props.stats || []
    return(
      <Content hide={stats.length === 0}>
      <ButtonClose onClick={() => this.props.clearStats()}> Back </ButtonClose>
      { stats.length === 0 ?  <Img><img style={{margin: '50% auto'}}alt='SIM RACING VALLEY' src={require('../../images/logoBlack.png')}/></Img>
      : <Table>
        <Thead>
          <tr>
            <Th>Pos</Th>
            <Th hideOnMobile>Carga</Th>
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
              <Td hideOnMobile>{ lap.fuel }</Td>
              <Td best={lap.bests1}> { lap.s1 }</Td>
              <Td best={lap.bests2}> { lap.s2 }</Td>
              <Td best={lap.bests3}> { lap.s3 }</Td>
              <Td best={lap.bestlap}> { getString(lap.laptime) }</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      }
      </Content>
    )
  }
}

const getString = time => {
  return time.search('ALERTA') === -1 ? time :  '--:--:--:---'
}

const ButtonClose = styled.button`
  border: 1px solid black;
  @media ${device.mobileS}{
    display: block;
    background: white;
  }
  @media ${device.laptop}{
    display: none;
  }
`

const Content = styled.div`
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'block'}
    position: absolute;
  }
  @media ${device.laptop}{
    display: block;
    position: relative
  }
  height: 100%;
  width: 100%;
  background: white;
`

const Img = styled.div`
  width: 100%;
  height: 100%;
  background: ${ mainColor };
  box-sizing: border-box;

  @media ${device.mobileS}{
    border-left: 0;
  }
  @media ${device.laptop}{
    border-left: 5px solid black;
  }

`
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media ${device.mobileS}{
    border-left: 0;
  }
  @media ${device.laptop}{
    border-left: 5px solid black;
  }
  box-sizing: border-box;
`
const Thead = styled.thead`
  overflow: auto;
  background: #fff;
`

const Tbody = styled.tbody`

  overflow: auto;
`
const Td = styled.td`
  box-sizing: border-box;
  text-align: ${props => props.right ? 'right' : 'left'};
  padding: 0.8em 0.5em;
  vertical-align: top;
  color: ${props => props.best ? 'green' : 'black'}
  font-weight: ${props => props.best ? 'bold' : 'normal'}
  @media ${device.mobileS}{
    font-size: ${props => props.hideOnMobile ? '0px' : '1em'};
  }
  @media ${device.laptop}{
    font-size: 1em;
  }
`
const Th = styled.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 0.8em 0.5em;
  @media ${device.mobileS}{
    font-size: ${props => props.hideOnMobile ? '0px' : '1em'}
  }
  @media ${device.laptop}{
    font-size: 1em;
  }

`

const Tr = styled.tr`
  background: white;
`
const mapStateToProps = state => ({ stats: state.raceReducer.stats })

const mapDispatchToProps = dispatch => ({
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
