import React, { Component } from 'react'
import { clearStats } from '../../../actions/getRace'
import { connect } from 'react-redux'
import {
  ButtonClose,
  Content,
  Img,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
} from './style'

const logo = require('../../../images/logoWhite.png')
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
      { stats.length === 0 ?  <Img><img style={{margin: '50% auto'}}alt='SIM RACING VALLEY' src={ logo }/></Img>
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

const mapStateToProps = state => ({ stats: state.raceReducer.stats })

const mapDispatchToProps = dispatch => ({
  clearStats: () => dispatch(clearStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
