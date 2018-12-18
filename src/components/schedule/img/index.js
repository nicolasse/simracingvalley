import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import {
  Password,
  Image,
  Background,
  Content,
  Time,
  Car,
  Track
} from './style'

const metalmoro = "https://i2.wp.com/simracer.es/app/uploads/2017/11/38549055076_6dd28b6e42_h.jpg?ssl=1"

class Img extends Component {
  state={
    hidePassword: true,
  }
  lockIcon= () => {
    return <FontAwesome
    name='lock'
    title='only logged users'  
    />
  }

  handleMouseEnter = () => {
    this.setState({ hidePassword: false })
  }
  handleMouseLeave = () => {
    this.setState({ hidePassword: true })
  }

  render(){
    let race = this.props.race
  return (
    <Content onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <Time>{ race.time}</Time>
      <Car>{ race.cars[0]}</Car>
      <Track>{ race.tracks[0]}</Track>
      <Image src={metalmoro} />
      <Background />
      <Password
        hide={this.state.hidePassword}
      >
        { race.password || race.password === "" 
          ? 'password: ' + race.password : 'Sign in to see the password'
        }
      </Password>

  </Content>)
  }
}


export default Img
