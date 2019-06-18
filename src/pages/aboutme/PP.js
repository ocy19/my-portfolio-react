import React, {Component} from 'react';
import './PP.css'
import Pp from '../../img/diri.jpg'

class PP extends Component {
    render(){
      return(
        <div className="pp">
          <h2>MY DETAILS</h2>
          <img Src={Pp} alt="..." />
          <h3>Your future System Analyst and Android Developer with knack for Photography and Graphic Designer.</h3>
        </div>

      );
    }
  }

export default PP;
