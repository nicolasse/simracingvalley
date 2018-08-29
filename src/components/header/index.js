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
  left: 0;
  right: 0;
  top: 100px;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
`
const Content = style.div`
  margin: 0 auto;
  width: 100%;
  height: 50vh;
`

export default Header
