import React from 'react'
import ReactLoading from 'react-loading'
import { mainBlue } from '../commons/style'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Container>
    <ReactLoading
      type='spin'
      delay={100}
      width={'5em'}
      color={mainBlue}
    />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
`

export default Loading
