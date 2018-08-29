import React, { Component } from 'react'
import style from 'styled-components'
import Popup from '../popup'
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
          <Li><Popup title='Como Funciona?' /></Li>
          <Li><Popup title='Conduta' /></Li>
        </Ul>
        </Section>
        <Section>
         © Simracing Valley - 2018
        </Section>
        <Section>
         Facebook
        </Section>
      </Foot>
    )
  }
}

const Foot = style.footer`
  display: flex;
  background-color: #303036;
  height: 250px;
  width: 100%;
  bottom: 0;
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
`

const Logo = style.img`
  width: 60px;
  height: 60px;
`
const Section = style.div`
  width: 30%;
  color: #6b6d6f;
  margin: 30px;
`

export default Footer
