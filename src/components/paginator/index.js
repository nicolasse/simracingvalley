import React, { Component } from 'react'
import styled from 'styled-components'
import { mainColor, boldColor } from '../commons/style'

class Paginator extends Component {
  state={
    currentPage: 0
  }
  showPages(){
    let pages= []
    for( let page= 0; page < this.props.pages; page++ ){
      pages.push( <NumberPage current={this.state.currentPage === page} key={page} onClick={() => {this.props.selectPage(page); this.setState({currentPage: page})}} >{ page + 1 }</NumberPage> )
    }
    return pages
  }

  prevPage = () => {
    let current = this.state.currentPage
    if(this.state.currentPage > 0){
      this.setState({ currentPage: current -1 })
      this.props.selectPage( current - 1 )
    }
  }
  nextPage = () => {
    let current = this.state.currentPage
    if( current < (this.props.pages - 1)){
      this.setState({ currentPage: current + 1 })
      this.props.selectPage( current + 1 )
    }
  }

  selectPages = ( max ) => {
    let middle = Math.round(this.props.pages / 2)
    let allPages = this.showPages()
    if(this.props.pages <= max){
      return allPages
    }
    let selected = allPages.filter( (page, index) => {
       if(index < middle -1 && index < max / 2) {
         return page
      }
      else return null
    } )
    selected.push(<NoPage key={'dotsPages'}>...</NoPage>)
    let lastPart = allPages.filter((page, index) => {
      if(index > middle && index > max / 2){
        return page
      }
      else return null
    })
    return selected.concat(lastPart)
  }

  render() {
    return(
      <Container hide={this.props.pages === 0 }>
      <NumberPage onClick={ this.prevPage }>{'<'}</NumberPage>
      { this.selectPages( 6 ) }
      <NumberPage onClick={ this.nextPage }>{'>'}</NumberPage>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-bottom: 30px;
  display: ${props => props.hide ? 'none' : 'flex'};
  justify-content: center;
  width:100%;
  height: 50px;
`

const NumberPage = styled.button`
  ${props => props.current
  ? 'background:' + mainColor
  : 'background: white;'}
  display: flex;
  color: black;
  font-size: 0.9em;
  border: none;
  border-right: 1px solid black;
  &:hover{
    color: white;
    background: ${boldColor}
  };
  width: 40px;
  justify-content: center; 
  align-items: center;
  &:last-child{
   border-right: none;
  }
`

const NoPage = styled.span`
  display: flex;
  color: black;
  font-size: 0.9em;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;

`

export default Paginator
