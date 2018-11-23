import React, { Component } from 'react'
import style from 'styled-components'
import Popup from '../popup'
import Conduta from './condutaContainer'
import ComoFunciona from './comoFuncionaContainer'
import P from './P'

import { device } from '../../device'

const logoSv = require('../../images/sv.png')

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
        <Section>
         © Simracing Valley - 2018
        </Section>
      </Foot>
    )
  }
}

const MailTo = style.a`
  text-decoration: none;
  color: grey;
`

const Foot = style.footer`
  display: flex;
  margin-top: 5em;
  background-color: #303036;
  justify-content: flex-start;
  @media ${device.mobileS}{
    font-size: 0.7em;
    flex-flow: column nowrap;
  }
  @media ${device.laptop}{
    font-size: 0.75em;
    flex-flow: row wrap;
  }
`
const CopyRight = style.div`
  self-align: flex-end;
  color: white;
`

const Ul = style.ul`
  list-style-type: none;
  display: table-cell;
  margin: 0;
  padding: 0;
`

const Title = style.h1`
 font-size: 1em;
 color: white;
`

const Li = style.li`
  vertical-align: middle;
  cursor: pointer;
  margin-top: 0.8em;
`

const Logo = style.img`
  width: 60px;
  height: 60px;
`
const Section = style.div`
  @media${device.mobileS}{
  ${props => props.primary
  ? 'display: none'
  : 'flex: 1 0 auto;'}
  }
  @media${device.laptop}{
  display: block;
  ${props => props.primary 
  ? 'flex: 0 0 20%'
  :'flex: 0 0 auto;'
  }

  }
  color: #6b6d6f;
  margin: 30px;
`

export default Footer
