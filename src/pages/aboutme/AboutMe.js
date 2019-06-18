import React, { Component } from 'react';
import './AboutMe.css';
//import App from './App';
import Navigation from '../../Navigation';
import Header from './Header';
import Experience from './Experience'
import Footer from '../../Footer'
import Pp from './PP';
import Education from './Education';


export default class AboutMe extends Component{
  render(){
    return(
      <div className="App">
      <Navigation logoTitle="About Octariny" />
      <Header title="Octariny's Portfolio"/>
      <Pp />
      <Experience />
      <Education />
      <Footer />
      </div>
    );
  }
}
