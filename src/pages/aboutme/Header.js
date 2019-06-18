import React, {Component} from 'react';
import Background from '../../img/header2.jpg'
import './Header.css'

const mystyles= {
  backgroundImage:`url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover'
}


class Header extends Component {

  render(){
    return (
      <header style={mystyles}>
        <h1> </h1>
        <p> </p>
        <span></span>

      </header>

    );
  }
};

export default Header;
