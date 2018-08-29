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
    <Title>O que é o Simracing Valley?</Title>
    <P>
    O SIMRACING VALLEY foi desenvolvido para aqueles que procuram um bom lugar
    para correr virtualmente com os amigos após um longo dia de trabalho.
    </P>
    <P>
    O principal objetivo da plataforma é garantir um espaço virtual capaz de
    reunir pessoas que desejam participar de corridas no GAME AUTOMOBILISTA
    sem o apego a longas horas de treinos, bem como reunir pessoas que desejam
    se aventurar no cenário competitivo brasileiro.
    </P>
    <P>
    Garantimos a qualidade das corridas através de um sistema de ranqueamento
    e de um sistema de "pontos na carteira" que sinalizam tanto os pilotos que
    necessitam de monitoramento ou de moderação, quanto os pilotos que se
    destacam em relação aos outros. Também, a própria comunidade pode reportar
    qualquer conduta tóxica dentro da plataforma e manter as relações entre os
    usuários em um nível sadio.
    </P>
    <P>
    O SIMRACING VALLEY também é uma plataforma em desenvolvimento, e o meu
    principal desejo é que a plataforma se transforme junto das necessidades
    e demandas da comunidade.
    </P>
     <Signature href='https://www.facebook.com/ramalzin'>Ramon Barros</Signature>
      </Section>
      <Section>
    <Title>Como Funciona?</Title>
    <P>
Nossos servidores são aberto todos os dias às 19 horas para que os pilotos virtuais possam entrar, fazer treinos livres e se prepararem para a corrida que começa às 20 horas.
    </P>
	<P>
Ao final da corrida todo o resultado gerado é processado e lançado no histórico dos pilotos que participaram da bateria.
</P>
<P>
Definições do servidor como: "Carro utilizado", "Pista", "Dia/Noite", entre outras, também são modificadas diariamente para que a comunidade possa usufruir de todo o conteúdo do GAME AUTOMOBILISTA.
</P>
      </Section>
    </Wrapped>
    </div>
    )
  }
}

const Title = style.h1`
  text-align: center;
`
const P = style.p`
  text-align: justify;
`

const Signature = style.a`
  font-style: italic;
  text-decoration: none;
  color: #000;

`

const Wrapped = style.div`
  width: 80vw;
  margin: 0 auto;
`

const Section = style.div`
  float: left;
  background: #f2f2f2;
  width: 36vw;
  margin: 0.5vw;
  padding: 1vw;
`

export default Home
