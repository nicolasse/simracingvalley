import React from 'react'
import ReactLoading from 'react-loading'
import { mainBlue } from '../style'
import { Container } from './style'

const Loading = () => {
  return (
    <Container>
    <ReactLoading
      type='spin'
      delay={100}
      width={'40px'}
      color={mainBlue}
    />
    </Container>
  )
}


export default Loading
