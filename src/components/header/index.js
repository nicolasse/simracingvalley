import React, { Component } from 'react'
import style from 'styled-components'
import Image from './Image'

class Header extends Component {

  render() {
    return(
      <Content>
        <AnimatedText title>{this.props.title}</AnimatedText>
        <AnimatedText>{this.props.text}</AnimatedText>
        <Image src={this.props.image} />
      </Content>
    )
  }
}

const AnimatedText = style.h1`
  position: absolute;
  font-size: ${props => props.title ? '20px' : '70px'};
  color: white;
  text-align: center;
  left: 0;
  right: 0;
  top: 25%;
  margin-left: auto;
  margin-right: auto;
`
const Content = style.div`
  width: 100%;
  height: 500px;
`

export default Header
