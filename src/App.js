import React, { Component } from 'react';
import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Ranking from './components/ranking'
const imageRoute =  require('./images/home.jpg')

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
