import React from 'react';
import './Contact.css';
//import App from './App';
import Navigation from '../../Navigation';
import PP from './PP'
import Kontak from './Kontak'
import Footer from '../../Footer'

export default class Contact extends React.Component{
  render(){
    return(
      <div>
      <Navigation logoTitle="Octa's Contact" />
      <PP />
      <Kontak />
      <Footer />
      </div>
    );
  }
}
