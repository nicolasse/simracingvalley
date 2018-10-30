import React, { Component } from 'react'
import styled from 'styled-components'

class Paginator extends Component {
  showPages(){
    let pages= []
    for( let page= 0; page < this.props.pages; page++ ){
      pages.push( <NumberPage key={page} onClick={() => this.props.selectPage(page)} >{ page + 1 }</NumberPage> )
    }
    return pages
  }

  render() {
    return(
      <Container>
      { this.showPages() }
      </Container>
    )
  }
}

const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`

const NumberPage = styled.button`
  display: flex;
  color: black;
  font-size: 1.3em;
  background: white;
  border: none;
  border-right: 1px solid black;
  &:hover{
  color: white;
  background: #7fffd4
  };
  &:focus{
  color: white;
  background: #7fffd4
  }
`

export default Paginator
