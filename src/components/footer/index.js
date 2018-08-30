import React, { Component } from 'react'
import style from 'styled-components'
import Popup from '../popup'
import Conduta from './condutaContainer'
import ComoFunciona from './comoFuncionaContainer'

const logoSv = require('../../images/sv.png')

class Footer extends Component {
  handleClick(e){
    e.preventDefault()

  }
  render() {
    return(
      <Foot>
        <Section>
          <Logo src={ logoSv } />
          <br />
          Simracing Valley
          Reunindo diversão e competição em um só lugar!
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
  background-color: #303036;
  width: 100%;
  bottom: 0;
  font-size: 0.9em;
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
