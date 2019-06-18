import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
  render(){
    return(
      <div className="services">
        <h3>My portfolios are . . .</h3>
        <h2>Content</h2>
        <div className="row">
              <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
              <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
              <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
              <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
        </div>

      </div>

    );
  }
}

const iconObj = [
  {
    icon: <ion-icon name="phone-portrait"></ion-icon>,
    title: 'Android App',
    description: 'Just making UI/Front End'
  },
  {
    icon: <ion-icon name="create"></ion-icon>,
    title: 'Art',
    description: 'A little bit digital art'
  },
  {
    icon: <ion-icon name="camera"></ion-icon>,
    title: 'Photography',
    description: 'Pretty good for a newbie'
  },
  {
    icon: <ion-icon name="help"></ion-icon>,
    title: 'Etcetera?',
    description: 'New works & skills are coming soon'
  }
]

class Icons extends Component {
  render() {
    return (
      <div>
        <span>
          {this.props.myIcon}
        </span>
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
      </div>
    )
  }
}

export default Services;
