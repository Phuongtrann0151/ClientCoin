// import logo from './logo.svg';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.scss';
import Home from './Component/Home';
import Signin from './Component/Signin';
import Signup from './Component/Signup';

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
  },
  server: "http://localhost:3333/facebook"
}
// console.log(typeof regexEmail)
const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default class App extends Component {
  state = {users: []}
  componentDidMount() { 
  }

  render() {
    return (
      <Router>
        <Route exact path="/"><Home siteName={capitalize(siteName)} info={info} regexEmail={regexEmail}/></Route>
        <Route exact path="/signup"><Signup siteName={capitalize(siteName)} info={info} regexEmail={regexEmail}/></Route>
        <Route exact path="/signin"><Signin siteName={capitalize(siteName)} info={info} regexEmail={regexEmail}/></Route>
      </Router> 
    );
  }
}