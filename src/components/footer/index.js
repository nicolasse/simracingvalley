import React, { Component } from 'react'
import style from 'styled-components'

class Footer extends Component {
  render() {
    return(
      <Foot>
        <Section>
          <Logo src='../../images/sv.png' />
          <br />
          Simracing Valley
          Reunindo diversão e competição em um só lugar!
        </Section>
        <Section>
          Parceiros
          <br />
          SEJA UM PARCEIRO!
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
  flex-flow: row;
  background-color: #303036;
  height: 100%;
  padding: 30px;

`
const Logo = style.img`
  width: 60px;
  height: 60px;
`
const Section = style.div`
  width: 300px;
  color: #6b6d6f;
  margin: 30px;
`

export default Footer
