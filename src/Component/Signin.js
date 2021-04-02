import React, {
    useState,
    useEffect
} from 'react';
import {
    Button,
    Form,
    // Button,
    // Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import axios from 'axios';

import Particles from 'react-particles-js';

import Header from './Header';

import config from './Config/particles';

// import {
//   BrowserRouter as Router,
//   Route, 
//   Switch 
// } from 'react-router-dom'


const Signin = (props) =>{
	useEffect(() => {
	    document.title = `Đăng nhập để mua bán win tại ${props.siteName.split(/\./)[0]}`;
	});
    const [errorMsg, setErrorMsg] = useState("")
    return (
    	<>
			<Particles params={config} />
      		<Header siteName={props.siteName}/>
	        <div className="container ct-container">
	        	<h1 className="text-primary"><u className="fw-normal">Sign in to {props.siteName}</u></h1> { errorMsg && <p className="error">{errorMsg}</p> }
		        <Form>
		          <Form.Group>
		            <Form.Label className="text-dark fw-400">Username</Form.Label>
		            <Form.Control type="text" name="username" required />
		          </Form.Group>
		          <Form.Group>
		            <Form.Label className="text-dark fw-400">Password</Form.Label>
		            <Form.Control type="password" name="password" required />
		          </Form.Group>
		          <Form.Group className="d-flex flex-wrap">
		            <Button variant="light" className="submit" type="submit">Sign up</Button>
		            <a href={props.info.server} className="btn btn-facebook submit mt-4" type="button">Login with Facebook</a>
		            <button href="/login?auth=google" className="btn btn-danger submit mt-4" type="button">Login with Google</button>
		            <div className="link">
		            	<a href="/signup" className="link-content fw-400">I don&apos;t have an account</a>
		            </div>
		          </Form.Group>
		        </Form>
		    </div>
		    <footer className="bg-primary text-light flex-wrap pt-4 fixed-bottom">
			    <div className="ctner custom-footer-1024">
			        <h6 className="ft-infomation custom-footer-1024">
			          <p className="text-dark text-footer">© {new Date().getFullYear()} - All Rights Reserved <a href="/" className="text-light text-footer">{props.siteName}</a> with power <a href="https://nodejs.org" className="text-light text-footer">Nodejs</a>. Development by<a href={props.info.dev.facebook} className="text-light text-footer"> {props.info.dev.name}</a></p>
			        </h6>
			    </div>
		    </footer>
    	</>
    )
}
Signin.propTypes = {
	  siteName: PropTypes.string,
	  info: PropTypes.object,
	  regexEmail: PropTypes.object
};
export default Signin