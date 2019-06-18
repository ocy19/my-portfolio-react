import React, { Component } from 'react';
import './Experience.css';
import Eannovate from '../../img/eannovate.jpg'
import Nfs from '../../img/nfs.jpg'
import Volantis from '../../img/volantis.png'

class Experience extends Component {
  render(){
    return(
      <div className="experience">
        <h2>Experience</h2>
        <h3>Not much since I'm still a New leaf, but here are my list work experiences</h3>
        <div className="row">
              <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
              <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
              <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
        </div>
      </div>

    );
  }
}

const iconObj = [
  {
    icon: <img src={Eannovate} alt="..."/>,
    title: 'PT Eannovate',
    description: 'As a QA Intern on 2017 for three months'
  },
  {
    icon: <img src={Nfs} alt="..."/>,
    title: 'New Frontier Solutions',
    description: 'As a QA staff on 2018 for six months'
  },
  {
    icon: <img src={Volantis} alt="..."/>,
    title: 'Volantis ',
    description: 'As a QA Automation Intern on 2018 for three months'
  }
]

class Icons extends Component {
  render() {
    return (
      <div className="icons">
        <span>
          {this.props.myIcon}
        </span>
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
      </div>
    )
  }
}

export default Experience;
