import React, { Component } from 'react'
import styled from 'styled-components'

class Profile extends Component{
  render(){
    return(
      <Wrapper>
        <ProfileBox>
          <Avatar>
          </Avatar>
          <Information>
            <Li>Nome</Li>
            <Li>Classe</Li>
            <Li>Sexo</Li>
            <Li>Nascimento</Li>
            <Li>Estado, Cidade</Li>
            <Li>Cadastrou-se em</Li>
          </Information>
        </ProfileBox>
        <Section>
        <Stats>
          Stats
        
        </Stats>
        </Section>
      </Wrapper>
    )
  }
}

const Section = styled.div`
  font-size: 2em;
  margin: 0 auto;

`

const Stats = styled.div`
  background: #d3d3d3
  width: 800px
  margin-right: 0
  margin-left: auto
  height: 150px
`

const Information = styled.ul`
  padding: 0.5em;
  margin: 1em;
  list-style-type: none
`
const Li = styled.li`
  margin: 0.5em;
  font-size: 0.9em;
`

const Wrapper = styled.div`
  width: 1080px
  background: #f4f4f4
  margin: 0 auto;
  margin-top: 200px
  height: 800px
`

const ProfileBox = styled.div`
  box-shadow:  0 0 10px 5px rgba(0, 0, 0, 0.19);
  position: absolute
  top: 100px
  margin-left: 20px
  width: 244px
  height: 475px
  background: white
  padding: 5px
  border-radius: 5px
`
const Avatar = styled.div`
  background: blue
  position: relative
  width: 100%
  height: 240px
  border-radius: 5px
`

export default Profile
