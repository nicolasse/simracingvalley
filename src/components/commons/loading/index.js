import styled from 'styled-components'
import React, { Component } from 'react'

class Loading extends Component {
  render(){
    return(
    <Content>
      <span>Loading...</span>
    </Content>
    )
  }
}

const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;


`

export default Loading
