import React, { 
  useState, 
} from 'react';
import {
  Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  const [query, setQuery] = useState("")
  const submitSearch = (e)=>{
    if(e)
      e.preventDefault()
    axios.get(`/search/${query}`).then(res=>{
      props.changeBill(true, res.data)
    }).catch(e=>{
      alert(e.toString())
    })
  }
  return (
    <header className="bg-primary">
      <div className="w-100 rs450">
        <a className="ctner ctner-header" href="/">
          <div className="ctner-logo">
              <img src="./logo.png" className="ctner-logo-image" alt="logo"/>
          </div>
          <h1 className="ctner-siteName text-light">{props.siteName}</h1>
        </a>
      </div>
      <div className="search ctner-header">
        <Form className="w-100">
          <input type="text" className="pl-primary w-75 flex-grow-1 ol-none ip-search pl-2 fw-400" value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={(e)=>(e.charCode===13||e.key==="Enter")?submitSearch(e):null} placeholder="Tìm kiếm giao dịch..."/>
          <button className="btn-email btn-light text-light" type="button" onClick={()=>submitSearch()}><FontAwesomeIcon icon={faSearch} className="text-center text-primary"/></button>
        </Form> 
      </div>
    </header>
  );
}

Header.propTypes = {
  siteName: PropTypes.string,
  logo: PropTypes.string,
  changeBill: PropTypes.func
};

export default Header