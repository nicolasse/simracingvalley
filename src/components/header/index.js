import React, { Component } from 'react'
import style from 'styled-components'
import Image from './Image'

class Header extends Component {

  render() {
    return(
      <Content>
        <AnimatedText small>{this.props.title}</AnimatedText>
        <AnimatedText>{this.props.text}</AnimatedText>
        <Image src={this.props.image} />
      </Content>
    )
  }
}

const AnimatedText = style.h1`
  position: absolute;
  font-size: ${props => props.small ? '20px' : '70px'};
  color: white;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: ${props => props.small ? 'translate(-50%, -350%)' : 'translate(-50%, -100%)'};
  z-index: 0;
`
const Content = style.div`
  position: relative;
  margin:  0vw auto 0 auto;
  width: 100%;
  height: 50vh;
`

export default Header
