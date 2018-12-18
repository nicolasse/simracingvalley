import React, { Component } from 'react'
import Header from './header'
import {
  Wrapped,
  Content,
  Section,
  Title,
  P,
  Iframe
} from './style'

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
export default Home
