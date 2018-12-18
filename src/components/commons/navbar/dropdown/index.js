import React, { Component } from 'react'
import { Icon, ExternalLink, Title, Links, Dropbutton } from './style'
import {StyledLink} from '../style'

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
             return (
               <ExternalLink 
                 dropdown={1}
                 key={index}
                 target='_blank' 
                 href={link.path}
               >
                  { link.name }
                  <Icon>{link.icon}</Icon>
               </ExternalLink>
             )
            }
            else{
              return (
                <StyledLink
                  dropdown={1}
                  key={index}
                  to={link.path}
                >
                  {link.name}
                  <Icon>{link.icon}</Icon>
                </StyledLink>
              )
            }
          }
          )}
        </Links>
      </Dropbutton>

    )
  }
}


export default Dropdown
