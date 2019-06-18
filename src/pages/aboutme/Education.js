import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render(){
    return(
      <div className="education" >
        <h2>Education</h2>
        <div className="row">
          <div className="sd">
            <span><ion-icon name="school"></ion-icon></span>
            <h4>SDN 2 Balapulang Kulon</h4>
            <p>2000-2006</p>
          </div>
          <div className="smp">
            <span><ion-icon name="school"></ion-icon></span>
            <h4>SMPN 1 Lebaksiu</h4>
            <p>2006-2009</p>
          </div>
          <div className="sma">
            <span><ion-icon name="school"></ion-icon></span>
            <h4>SMAN 3 Slawi</h4>
            <p>2009-20012</p>
          </div>
          <div className="kuliah">
            <span><ion-icon name="school"></ion-icon></span>
            <h4>Universitas Gunadarma</h4>
            <p>2013-2017</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
