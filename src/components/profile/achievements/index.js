import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import { Wrapper } from './style'



class Achievements extends Component {
  render() {
    return(
      <Wrapper>
      {this.props.achievements.map((achievement, index) => (
        <FontAwesome 
          key={index}
          name='trophy'
          size= '2x'
          style={{color: 'goldenrod', margin: ' 0.5em 0.25em' }}
          title={achievement.achi_name}
        />

      ))}
      </Wrapper>
       )
}
}


export default Achievements
