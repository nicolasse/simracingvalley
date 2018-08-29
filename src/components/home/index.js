import React, { Component } from 'react'
import Header from '../header'

import style from 'styled-components'


class Home extends Component {
  render (){
    return(
    <div>
    <Header
      title='Participe de corridas'
      text='TODOS OS DIAS'
      image={require('../../images/home.jpg')}>
    </Header>
    <Wrapped>
      <Section>
      <Title big>
        Nosso algoritmo reconhece as chances de vitória de cada piloto!
      </Title>
    <P>
      Estamos preparando o Simracing Valley para que ele seja capaz de posicionar os pilotos no grupo que melhor os comportam, sem interferência humana e baseado nos próprios resultados do piloto dentro da plataforma. Dessa forma, os pilotos poderão escolher entre ESCALAR os grupos até o topo do Ranking, ou se estabelecer em um grupo mais baixo e se DIVERTIR participando de corridas contra outros pilotos de mesmo nível! 
    </P>
      </Section>
      <Section column>
      <Title>
        Alcance o TOPO!
      </Title>
      <P>
      Corra contra os melhores dos melhores dentro da plataforma e estabeleça o seu lugar entre eles!
      </P>
      </Section>
      <Section column>
      <Title>
      Diversão SEMPRE!
      </Title>
      <P>
      Utilize a plataforma para relaxar ao mesmo tempo que curte uma boa dose de adrenalina, enquanto disputa contra outros usuários!
      </P>
      </Section>
      <iframe src="https://store.steampowered.com/widget/431600/" frameBorder="0" width="100%" height="190"></iframe>
    </Wrapped>
    </div>
    )
  }
}

const Title = style.h1`
  font-size: ${props => props.big ? '1.4em' : '1em'}
`
const P = style.p`
  display: block;
  line-height: 2em;
  width: 100%;
`

const Signature = style.a`
  font-style: italic;
  text-decoration: none;
  color: #000;

`

const Wrapped = style.div`
  width: 80%;
  margin: 3em auto;
`

const Section = style.div`
  background: #fff;
  padding: 2em;
  width: ${props => props.column ? '44%' : ''};
  float: left;
`

export default Home
