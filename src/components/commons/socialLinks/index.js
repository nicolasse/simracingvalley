import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './style'

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


export default Social
