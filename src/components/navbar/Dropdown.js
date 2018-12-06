import React, { Component } from 'react'
import { device } from '../../device'
import styled from 'styled-components'
import StyledLink from './StyledLink'
import {mainColor, boldColor, lightColor} from '../commons/style'
class Dropdown extends Component {
  state={
    hide: true
  }

  handleOver = (e) =>{
    e.stopPropagation()
    this.setState({hide: false})
  }

  handleLeave = () => {
    this.setState({hide: true})
  }

  handleClick = (e) => {
    e.stopPropagation()
  }
  render(){
    return(
      <Dropbutton onMouseLeave={this.handleLeave} onMouseOver={this.handleOver} > 
          <Title  onClick={ this.handleClick }> {this.props.name} </Title>
          <Links hide={this.state.hide}> 
          { this.props.links.map((link, index) => {
            if(link.external){
             return <ExternalLink dropdown={1} key={index} href={link.path}>{link.name}</ExternalLink>
            }
            else{
              return <StyledLink dropdown={1} key={index} to={link.path}>{link.name}</StyledLink>
            }
          }
          )}
        </Links>
      </Dropbutton>

    )
  }
}

const ExternalLink = styled.a`
  @media ${device.mobileS}{
   background: #333;
   color: white;
  }
  min-width: 5em;
  text-align: center;
  text-decoration: none;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  transition: all .2s ease-in;
  display: block;
  justify-content: center;
  flex-flow: column nowrap;
  flex: 1 0.5 100%
  &:hover {
    background: ${boldColor};
  }
  display: ${ props => props.home ? 'block' : 'flex' }
    @media ${device.laptop}{
  ${props => props.dropdown
  ? 'background: ' +lightColor+'; color: black; float: none;'
  : 'background: #333; color: white; float: left'
  }
  }
`
const Links = styled.div`
  transition: opacity .2s ease-in;
  &:appear {
    opacity: 1;
  }
  @media ${device.mobileS}{
    width: 100%;
    ${props => props.hide ? 'display: none' :  'display: block;'}
    flex-flow: column nowrap
  }
  @media ${device.laptop}{
    ${props => props.hide
     ? 'display:none;opacity: 0 '
      : 'display: block; opacity: 1'
    }
    flex-flow: column nowrap;
    width: auto;
  }
`
const Title = styled.a`
  &:hover {
    background: ${boldColor};
    flex-direction: column;
  }
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
  min-width: 5em;
  transition: background .2s ease-in;

  display: ${ props => props.home ? 'block' : 'flex' }
  @media ${ device.mobileS }{
    display: flex;
  }
  @media ${device.laptop}{
    display: flex;
    float: left;
  }
`

const Dropbutton = styled.li`
  &:hover {
    background: ${boldColor};
  }
  transition: background .2s ease-in;
  background: #333;
  list-style-type: none;
  text-decoration: none;
  text-align: center;
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
