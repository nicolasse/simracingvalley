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
        <Section>
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
        <CopyRight>
         © Simracing Valley - 2018
        </CopyRight>
      </Foot>
    )
  }
}

const Foot = style.footer`
  display: flex;
  width: 100%;
  margin-top: 50px;
  background-color: #303036;
  @media ${device.mobileS}{
    font-size: 0.6em;
  }
  @media ${device.laptop}{
    font-size: 0.75em;
  }
`
const CopyRight = style.div`
  color: white;
  margin: auto 30px 30px auto;
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
  width: 17%;
  color: #6b6d6f;
  margin: 30px;
`

export default Footer
