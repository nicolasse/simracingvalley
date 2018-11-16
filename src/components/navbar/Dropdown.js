import React, { Component } from 'react'
import { device } from '../../device'
import styled from 'styled-components'
import StyledLink from './StyledLink'
import {boldColor} from '../commons/style'
class Dropdown extends Component {
  state={
    hide: true
  }

  handleOver = () =>{
    this.setState({hide: false})
  }

  handleLeave = () => {
    this.setState({hide: true})
  }

  halndleClick = () => {
    this.setState({hide: false})
  }
  render(){
    return(
      <Dropbutton onMouseLeave={this.handleLeave} onMouseOver={this.handleOver} onClick={this.handleClick}> 
          <Title> {this.props.name} </Title>
        <Links hide={this.state.hide}> 
          <StyledLink dropdown={'true'} to='/races'>Carreras</StyledLink>
          <StyledLink dropdown={'true'} to='/records'>Records</StyledLink>
        </Links>
      </Dropbutton>

    )
  }
}

const Links = styled.div`
  @media ${device.mobileS}{
    flex-direction: column
    width: 100%;
  }
  @media ${device.laptop}{
  ${props => props.hide ? 'visibility: hidden; opacity: 0;   transition:all 0.3s linear;' : 'transition:all 0.3s linear;opacity: 1; visibility: visible'}
  flex-direction: column
    width: auto;
  }
`
const Title = styled.a`
  z-index: 2;
  text-align: center;
  text-decoration: none;
  color: white;
  min-height: 30px;
  font-size: 15px;
  padding: 10px;
  justify-content: center;
  cursor: default;
  flex-direction: column;

  display: ${ props => props.home ? 'block' : 'flex' }
  @media ${ device.mobileS }{
    display: none;
  }
  @media ${device.laptop}{
  display: flex;
  float: left;
  &:hover {
  background: ${boldColor};
  }
  }
`

const Dropbutton = styled.li`
  background: #333;
   list-style-type: none;
  text-decoration: none;
  text-align: center;
    &:hover {
    background: ${boldColor};
    flex-direction: column;
  }
  &.active {
    background: white;
    color: ${boldColor};
  }
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    height: 50px;
    width: auto;
    float: left;
    display: block;
  }
`

export default Dropdown
