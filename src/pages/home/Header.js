import React, {Component} from 'react';
import Background from '../../img/header1.png'
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
        <a href="/aboutme">{this.props.button}</a>
      </header>

    );
  }
};

export default Header;
