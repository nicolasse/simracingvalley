import React, { Component } from 'react'
import style from 'styled-components'
import { device } from '../../device'

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

const Button = style.button`
  font-size: 20px;
  text-align: center;
  padding: 0;
  font-weight: bold;
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin:  auto;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: default;
`
const Inner = style.div`
  position: relative
  @media${device.mobileS}{
  flex: 1 0 50%;
  }
  @media${device.laptop}{
  flex: 0 0 50%;
  top: 15%;

  }
  display: flex;
  height: 500px;
  background: white;
  border: 1px grey solid;
  border-radius: 5px;
  overflow-y: auto;
  color: black;
`
export default Popup
