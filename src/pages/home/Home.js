import React, { Component } from 'react';
import './Home.css';
//import App from './App';
import Navigation from '../../Navigation';
import Header from './Header';
import Services from './Services'
import Footer from '../../Footer'

export default class Home extends Component{
  render(){
    return(
      <div className="App">
      <Navigation logoTitle="Octa's Portfolio" />
      <Header title="Octariny's Portfolio" button="Find Out More"/>
      <Services />
      <Footer />
      </div>
    );
  }
}
