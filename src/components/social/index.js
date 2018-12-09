import React from 'react'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { device } from '../../device'

const Social = () => {
  return(
    <Container>
      <FontAwesomeIcon 
        icon={['fab', 'facebook']}
        size='2x'
        color= '#4267b2'
        cursor='pointer'
        title='Facebook Group'
        onClick={ () => window.open('https://www.facebook.com/groups/302431040496313/') }
      />

      <FontAwesomeIcon 
        icon={['fab', 'discord']}
        size='2x'
        color= '#7289da'
        cursor='pointer'
        title='Discord Group'
        onClick={ () => window.open('https://discord.gg/8AnvSS2') }
      />
    </Container>
  )
}

const Container = styled.div`
  @media ${ device.mobileS }{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 5em;

  } 
  @media ${ device.laptop }{
    position: fixed;
    top: 150px;
    left: 0;
    margin-left: 3%;
    display: flex;
    flex-flow: column nowrap
    justify-content: space-between;
    
  }
  height: 5em;

`

export default Social
