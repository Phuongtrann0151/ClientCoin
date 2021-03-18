// import logo from './logo.svg';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  // Switch 
} from 'react-router-dom'
import './App.scss';
import Home from './Component/Home';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Dashboard from './Component/Dashboard';

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const siteName = window.location.hostname
const info = { 
  dev : { 
    facebook: "https://www.facebook.com/vanvietquocanh/",
    name: "Van Viet Quoc Anh"
  },
  company: {
    email: "mailto:example@gmail.com",
    phone: "tel:0985142073",
    telegram: "@telegram",
    twitter: "@twitter",
    youtube: "utube",
    facebook:"facebook",
  }
}
// console.log(typeof regexEmail)
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class App extends Component {
  state = {users: []}

  componentDidMount() { 
    fetch('/users')
      .then(res => res.text())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
        <Route exact path="/"><Home siteName={siteName.capitalize()} info={info} regexEmail={regexEmail}/></Route>
        <Route exact path="/signup"><Signup siteName={siteName.capitalize()} info={info} regexEmail={regexEmail}/></Route>
        <Route exact path="/signin"><Signin siteName={siteName.capitalize()} info={info} regexEmail={regexEmail}/></Route>
        <Route exact path="/dashboard"><Dashboard siteName={siteName.capitalize()} info={info}/></Route>
      </Router>
    );
  }
}