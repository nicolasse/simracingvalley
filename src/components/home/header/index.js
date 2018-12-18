import React, { Component } from 'react'
import { Image, Content, AnimatedText } from './style'

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

export default Header
