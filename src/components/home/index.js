import React, { Component } from 'react'
import Header from './header'
import {
  Wrapped,
  Content,
  Section,
  Title,
  H1,
  P,
  Iframe
} from './style'
import { Parallax } from 'react-parallax'
import { AnimatedText } from './header/style'

let imageHead1 = null
let imageHead2 = null

class Home extends Component {
  componentWillMount(){
    imageHead1 = require('../../images/home.jpg')
    imageHead2 = require('../../images/home2.jpg')
  }

  render (){
    return(
      <>
      <div style={{ position: 'absolute', left: 0,'zIndex': 10, width: '100%'  }}>
        <Parallax 
          bgImage={ imageHead2 }
          bgImageAlt="Header"
          strength={300}
        >
        <div style={{ 'justify-content': 'center',display: 'flex','align-items': 'center', width: 'auto', height: '50vh' }}>
          <H1>SIMRACING VALLEY</H1>
        </div>
        </Parallax>
      </div>
      <Wrapped>
      {/* <Header
        title='Participe de corridas'
        text='TODOS OS DIAS'
        image={ imageHead }>
      </Header>*/}
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
      </Content>
        <Iframe
            src="https://store.steampowered.com/widget/431600/"
        />
      </Wrapped>
      </>
    )
  }
}
export default Home
