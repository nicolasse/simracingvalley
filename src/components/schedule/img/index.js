import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from '../../../device'

const metalmoro = "https://i2.wp.com/simracer.es/app/uploads/2017/11/38549055076_6dd28b6e42_h.jpg?ssl=1"

class Img extends Component {
  state={
    hidePassword: true,
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

const Password = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.95;
  z-index: 3;
  display: ${props => props.hide ? 'none' : 'flex'}
`


const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  filter: blur(4px);
  z-index: 0;
`
const Background = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  z-index: 0;
`

const Content = styled.div`
  flex: 1 1 100%;
  height: 30vh;
  display: flex;
  font-weight: bold;
  font-style: italic;
  position: relative;
  @media ${ device.mobileS }{
    font-size: 1.5em;
  }
  @media ${ device.laptop }{
    font-size: 3em;
  }
  margin: 1em 0;

`

const Time = styled.div`
  position: absolute;
  color: white;
  z-index:2;
  top: 1vh;
  font-size: 0.7em
   
`
const Car = styled.div`
  position: absolute;
  z-index:2;
  color: white;
  align-self: center;
  left: 25%;
`
const Track = styled.div`
  position: absolute;
  color: white;
  font-size: 0.7em
  z-index:2;
  top: 1vh;
  right: 1vw;
`
 

export default Img
