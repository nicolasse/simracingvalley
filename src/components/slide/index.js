import React, { Component  } from 'react'
import Header from '../header'
const images = ['../../images/home.jpg', '../../images/home2.jpg']

const headers = {
  heder: {
    {
    image: '../../images/home.jpg',
    title: 'Participe de corridas',
    text: 'TODOS OS DIAS',
  },
    {
    image: '../../images/home2.jpg',
    title: null,
    text: 'COMPETIÇÃO + DIVERSÃO' }
}

class Slide extends Component {
  
  render(){
    return (
      {images.map(header => {
        <Header
          title= {header.title}
          text= {header.text}
          image= {header.image}
          />
      })}
    )
  }
}
