import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import AboutMe from './pages/aboutme/AboutMe';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';



export default class App extends Component {
  render(){
    return(
      <div className="App">
          <BrowserRouter>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          </Switch>
          </BrowserRouter>
      </div>
);
}
}
