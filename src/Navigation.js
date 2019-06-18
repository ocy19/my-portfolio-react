import React, { Component } from 'react';
import './Navigation.css';
//import './App.css';

class Navigation extends Component {
  render(){
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>
        <li><a href={'/'}>Home</a></li>
        <li><a href={'aboutme'}>About Me</a></li>
        <li><a href={'portfolio'}>Portfolio</a></li>
        <li><a href={'contact'}>Contact</a></li>
        </ul>
      </nav>


  );
}
}

export default Navigation;
