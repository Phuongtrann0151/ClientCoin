import React, { 
  // useState, 
} from 'react';
// import {
//   BrowserRouter as Router,
//   Route, 
//   Switch 
// } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return (
    <header className="bg-primary">
      <div className="w-100 rs450">
        <a className="ctner ctner-header" href="/">
          <div className="ctner-logo">
              <img src="./logo2.png" className="ctner-logo-image" alt="logo"/>
          </div>
          <h1 className="ctner-siteName text-light">{props.siteName}</h1>
        </a>
      </div>
      <div className="search ctner-header">
        <form action="">
          <input type="text" className="pl-primary w-75 ol-none ip-search pl-2 fw-400" placeholder="Tìm kiếm giao dịch..."/>
          <button className="btn-email btn-light text-light" type="submit"><FontAwesomeIcon icon={faSearch} className="text-center text-primary"/></button>
        </form>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteName: PropTypes.string,
  logo: PropTypes.string
};

export default Header