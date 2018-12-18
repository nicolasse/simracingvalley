import React, { Component } from 'react'
import { Inner, Container, Button  } from './style'

class Popup extends Component {
  state = {
    title: this.props.title,
    text: this.props.text,
    visible: false,
  }

  handleClick = event => {
    this.setState({visible: true})
  }

  closePopup = event => {
    this.setState({visible: false})
  }

  render(){
    const TextToShow = this.props.innerComponent
    const popup = (this.state.visible ? <Container><Inner><Button onClick={() => this.closePopup()}>X</Button><TextToShow /></Inner></Container> : null)
    return(
      <div>
      {popup}
      <span onClick={this.handleClick}>{this.props.title}</span>
      </div>
    )
  }
}

export default Popup
