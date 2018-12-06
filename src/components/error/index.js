import React, { Component } from 'react'
import styled from 'styled-components'

class StyledError extends Component {
  
  state = {
    hide: false
  }
  handleClose = () => {
    this.setState({hide: true})
  }

  render(){
    return (
      <Container hidden={this.props.hide || this.state.hide}>
        <P>{this.props.message}</P>
        <Close onClick={this.handleClose}>Close</Close>
      </Container>
    )
  }
}

const P = styled.div`
  font-weight: bold;
  position: absolute;
`
const Close = styled.div`
  margin-left: auto;

`
const Container = styled.div`
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1em;
  background:  #ff8080;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  ${props => props.hidden ? 'visibility: hidden; opacity: 0;   ' : 'opacity: 1; visibility: visible'}
transition:all 0.3s linear;
`

export default StyledError
