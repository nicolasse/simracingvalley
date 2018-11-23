import React, { Component } from 'react'
import Header from '../header'
import style from 'styled-components'
import { device } from '../../device'

let imageHead = null

class Home extends Component {
  componentWillMount(){
    imageHead = require('../../images/home.jpg')
  }

  render (){
    return(
      <Wrapped>
      <Header
        title='Participe de corridas'
        text='TODOS OS DIAS'
        image={ imageHead }>
      </Header>
      <Content>
        <Section>
          <Title big>
            Nosso algoritmo reconhece as chances de vitória de cada piloto!
          </Title>
          <P>
            Estamos preparando o Simracing Valley para que ele seja capaz de
            posicionar os pilotos no grupo que melhor os comportam, sem
            interferência humana e baseado nos próprios resultados do piloto
            dentro da plataforma. Dessa forma, os pilotos poderão escolher
            entre ESCALAR os grupos até o topo do Ranking, ou se estabelecer
            em um grupo mais baixo e se DIVERTIR participando de corridas
            contra outros pilotos de mesmo nível!
          </P>
        </Section>
        <Section column>
          <Title>
            Alcance o TOPO!
          </Title>
          <P>
            Corra contra os melhores dos melhores dentro da plataforma e
            estabeleça o seu lugar entre eles!
          </P>
        </Section>
        <Section column>
          <Title>
            Diversão SEMPRE!
          </Title>
          <P>
            Utilize a plataforma para relaxar ao mesmo tempo que curte uma boa
            dose de adrenalina, enquanto disputa contra outros usuários!
          </P>
        </Section>
        <Iframe
            src="https://store.steampowered.com/widget/431600/"
        />
      </Content>
      </Wrapped>
    )
  }
}

const Iframe = style.iframe`
  margin-top: 5em;
  height: 190px;
  border: 0;
  margin: 5em auto;
  @media ${device.mobileS}{
  width: 100%
  }
  @media ${device.laptop}{
  width: 80%;}
`

const Title = style.h1`
  @media ${device.mobileS}{
    font-size: 1.4em;
  }
  font-size: ${props => props.big ? '1.4em' : '1em'}
  line-height: 2em;
`
const P = style.p`
  display: block;
  line-height: 2em;
  width: 100%;
`

const Wrapped = style.div`
  display: flex;
  flex-flow: row wrap;
  @media ${device.mobileS}{
    font-size: 0.8em;
    width: 100%;
    margin: 50px auto 0 auto;
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 0vh auto 0 auto; 
  }
  align-items: center;
  background: white;
`

const Section = style.div`
  background: #fff;
  @media ${device.mobileS}{
    width: 95%;
    margin: 0 auto;
  }
  @media ${device.laptop}{
  padding: 2em;
  width: ${props => props.column ? '30%' : '80%'};
  margin: 0 auto;
  float: left
  }
`
const Content = style.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 100%;
  background: white;
  z-index: 1;
`

export default Home
