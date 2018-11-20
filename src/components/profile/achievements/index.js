import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';


import styled from 'styled-components'

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

const Wrapper = styled.div`
  display: flex;
  margin: 1em auto;
  box-shadow:  0 0 10px 5px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background: white;
`

export default Achievements
