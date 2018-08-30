import React, { Component } from 'react'
import style from 'styled-components'

class Popup extends Component {
  state = {
    title: this.props.title,
    text: this.props.text,
    visible: false,
  }

  handleClick = event => {
    this.setState({visible: !this.state.visible})
  }

  closePopup = event => {
    this.setState({visible: false})
  }

  render(){
    const TextToShow = this.props.innerComponent
    const popup = (this.state.visible ? <Container><Inner><Button onClick={this.closePopup}>X</Button><TextToShow /></Inner></Container> : null)
    return(
      <div onClick={ this.handleClick }>
      {popup}
      {this.props.title}
      </div>
    )
  }
}

const Button = style.button`
  font-size: 20px;
  text-align: center;
  padding: 0;
  font-weight: bold;
  position: fixed;
  width: 30px;
  height: 30px;
  border: 3px black solid;
  border-radius: 15px;
  margin: 10px;
  background: white;
  color: black;

`

const Container = style.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  margin:  auto;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5)
`
const Inner = style.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 15%;
  width: 750px;
  height: 500px;
  margin: 0 auto;
  background: white;
  display: block;
  border: 1px grey solid;
  border-radius: 5px;
  overflow-y: auto;
  color: black;
`
export default Popup
