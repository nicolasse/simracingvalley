import React, { Component } from 'react'
import Popup from '../popup'
import Conduta from './condutaContainer'
import ComoFunciona from './comoFuncionaContainer'
import { 
  MailTo,
  Foot,
  Ul,
  Title,
  Li,
  Logo,
  Section,
  P 
} from './style'

const logoSv = require('../../../images/sv.png')

class Footer extends Component {
  handleClick(e){
    e.preventDefault()

  }
  render() {
    return(
      <Foot>
        <Section primary>
          <P>
          <Logo src={ logoSv } />
          Simracing Valley
          <br />
          Reunindo diversão e competição em um só lugar!
          </P>
        </Section>
        <Section>
           <Title>Simracing Valley</Title>
        <Ul>
          <Li><Popup title='Como Funciona?' innerComponent= { ComoFunciona }/></Li>
          <Li><Popup title='Conduta' innerComponent={ Conduta } /></Li>
        </Ul>
        </Section>
        <Section>
          <Title>Contato</Title> <MailTo href="mailto:contato@simracingvalley.com">contato@simracingvalley.com</MailTo>
        </Section>
        <Section>
          <Title>Parceiros</Title> <MailTo href="mailto:contato@simracingvalley.com">SEJA UM PARCEIRO!</MailTo>
        </Section>
        <Section style={{ 'alignSelf': 'flex-end', 'marginLeft': 'auto' }}>
         © Simracing Valley - 2018
        </Section>
      </Foot>
    )
  }
}


export default Footer
