import React, { Component } from 'react'
import style from 'styled-components'
import Image from './Image'
import { device } from '../../device'

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
  @media ${device.mobileS}{
    font-size: ${props => props.small ? '0.9em' : '1.2em'};
  }
  @media ${device.laptop}{
    font-size: ${props => props.small ? '20px' : '70px'};
  }
  color: white;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: ${props => props.small ? 'translate(-50%, -350%)' : 'translate(-50%, -100%)'};
  z-index: 0;
`
const Content = style.div`
  position: relative;
  width: 100%
  margin:  0vw auto 0 auto;
  @media ${device.mobileS}{
    height: 30vh;
  }
  @media ${device.laptop}{
    height: 50vh;
  }
`

export default Header
