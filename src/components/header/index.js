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
    font-size: ${props => props.small ? '0.5em' : '1.5em'};
  }
  @media ${device.laptop}{
    font-size: ${props => props.small ? '1.5em' : '3em'};
  }
  color: white;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: ${props => props.small ? 'translate(-55%, -250%)' : 'translate(-50%, -50%)'};
  z-index: 0;
`
const Content = style.div`
  position: sticky;
  z-index:0;
  top: 50px;
  flex: 1 1 100%;
  @media ${device.mobileS}{
    height: 30vh;
  }
  @media ${device.laptop}{
    height: 50vh;
  }
`

export default Header
