import React, { Component } from 'react'
import { P, Close, Container } from './style'

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

export default StyledError
