import React, {Component} from 'react';
import Background from '../../img/header3.jpg'
import './Header.css'

const mystyles= {
  backgroundImage:`url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover'
}


class Header extends Component {
  render(){
    return (
      <div app="header3">
      <header style={mystyles}>
        <h1>{this.props.title}</h1>
        <p> </p>
        <h1> </h1>
      </header>
      </div>
    );
  }
};

export default Header;
