import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
//import './App.css';

class Navigation extends Component {
  render(){
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="aboutme">About Me</Link></li>
        <li><Link to="portfolio">Portfolio</Link></li>
        <li><Link to="contact">Contact</Link></li>
        </ul>
      </nav>


  );
}
}

export default Navigation;
