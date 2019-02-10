import React, { Component } from 'react';
import Navbar from './Objects/Navbar';
import Banner from './Objects/Banner';
import Card from './Objects/Card';
import Footer from './Objects/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br><br></br>
        <Banner />
        <h4><center>Profesores</center></h4>
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;
