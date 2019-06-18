import React from 'react';
import './Portfolio.css';
//import App from './App';
import Navigation from '../../Navigation';
import Footer from '../../Footer'
import Header from './Header'
import Galery from './Galery'
import axios from 'axios';

export default class Portfolio extends React.Component{
  state = {
    data:[]
  }

  componentDidMount(){
    axios.get('https://picsum.photos/list')
    .then(resp => {
        this.setState({
          data: resp.data
        })

    });
  }

  render(){
    return(
      <div>
      <Navigation logoTitle="Octa's Portfolio" />
      <Header />
        <Galery picData={this.state.data}/>,
      <Footer />
      </div>
    );
  }
}
