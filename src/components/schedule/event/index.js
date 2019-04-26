import React, { Component } from 'react'
import Img from '../img'
import RaceInfo from '../raceInfo'
import { selectImg } from '../../../helpers/switchClassImage'
import {
  Wrapper,
  Info,
  Status,
  UserLink,
  Participants,
  Li,
  ClassImg,
  Button,
  Buttons,
  
} from './style'

class Event extends Component {
  state= {
    hide: true,
  }

  toggleHide = () => {
    this.setState( prevState => ({ hide: !prevState.hide }) )
  }

  showParticipants = (event) => {
    if(event.participants.length > 0)
    return (
      <React.Fragment>
      <Status style={{ color: 'black' }}>
        Inscritos
      </Status>
      <Participants>
      {event.participants.sort( (a, b)  => {return  b.points - a.points })
        .map( (driver) => {
          return (
            <Li key={driver._id}>
               <ClassImg src={selectImg(driver.classimg) }/>
               <UserLink to= {'/drivers/'+ driver.userid} >{ driver.username }</UserLink>
              { driver.rankpos + " | "}
              { driver.points + " | "}
              { driver.incidents }
              { driver.sponsor ?  " | *": ""}
            </Li>
          )
        } )}
    </Participants>
    </React.Fragment>
    )
  }

  render(){
    let event = this.props.info
    return(
                      <Wrapper>
                         { event.time }hs
                        <Info>
                        <Status online={ event.online }>
                          { event.online ? 'Online' : 'Offline' }
                        </Status>
                        <Status style={{ color: 'black' }}>
                          Marcado por: { event.official ? 'OFICIAL' : <UserLink  to={'/drivers/' + event.user.id}>{event.user.username }</UserLink>}
                        </Status>
                        <Img event={ event } />
                        </Info>
                        <Buttons>
                          <Button disabled={ !this.props.sponsorAvailable }> Inscreva-se para a corrida</Button>
                          <Button info onClick={ () => { this.toggleHide() } }> Ver detalhes do servidor</Button>
                        </Buttons>
                          <RaceInfo hide={ this.state.hide }info={ event }/>
                          { this.showParticipants(event) }
                      </Wrapper>

    )
  }
}

export default Event
