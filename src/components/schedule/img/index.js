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
      <Image src={ 'static/others/schedule/'+ this.props.event.tracks[1] + '.png' } /> 
      <Image front src={'/static/others/schedule/' + this.props.event.cars[2].substr(1) + '.png' }/>

  </Content>)
  }
}


export default Img
