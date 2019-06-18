import React, {Component} from 'react';
import Background from '../../img/header1.png'
import { Link } from 'react-router-dom'
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
        <h1>{this.props.title}</h1>
        <p>A website for Octa's Portfolio</p>
        <Link to="aboutme">{this.props.button}</Link>
      </header>

    );
  }
};

export default Header;
