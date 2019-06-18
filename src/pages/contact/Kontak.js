import React, {Component} from 'react';
import './Kontak.css'

class Kontak extends Component {
    render(){
      return(
        <div className="kontak">
          <h2>My Social Media</h2>
          <div className="row">
            <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title}/>
            <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title}/>
            <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title}/>
          </div>
          </div>
      );
    }
  }

  const iconObj = [
    {
      icon: <a href='https://www.instagram.com/arin.octa' className="instagram social"><ion-icon name="logo-instagram"></ion-icon></a>,
      title: 'Like my works on Instagram'
    },
    {
      icon: <a href='https://www.instagram.com/arin.octa' className="instagram social"><ion-icon name="logo-linkedin"></ion-icon></a>,
      title: 'Connect with me on LinkedIn'
    },
    {
      icon: <a href='https://www.twitter.com/ocy_13' className="twitter social"><ion-icon name="logo-twitter"></ion-icon></a>,
      title: 'Mention me on Twitter'
    }
  ]

  class Icons extends Component {
    render() {
      return (
        <div>
          <span>{this.props.myIcon}</span>
          <h4>{this.props.myTitle}</h4>
        </div>
      )
    }
  }

export default Kontak;
