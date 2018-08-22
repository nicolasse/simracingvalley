import React, { Component } from 'react';
import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
const imageRoute =  require('./images/home.jpg')

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header
          title="Participe de corridas"
          text="TODOS OS DIAS"
          image={imageRoute}
        >
        </Header>
        <Footer />
      </div>
    );
  }
}

export default App;
