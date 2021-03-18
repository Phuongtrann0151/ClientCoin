import React, {
	useEffect,
    useState
} from 'react';
import {
    Button,
    Form,
    // Button,
    // Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

// import {
//   BrowserRouter as Router,
//   Route, 
//   Switch 
// } from 'react-router-dom'


const Dashboard = (props) =>{
	useEffect(() => {
	    document.title = `Đăng ký mua bán win tại ${props.siteName}`;
	});
    const [errorMsg, setErrorMsg] = useState("")
    const onSubmit = () => {

    }
    return ( 
        <div className="container">
        	<h1>Sign up to {props.siteName}</h1> { errorMsg && <p className="error">{errorMsg}</p> }
	        <Form>
	          <Form.Group>
	            <Form.Label>First name</Form.Label>
	            <Form.Control type="text" name="firstname" placeholder="Please enter your firstname" required />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Last name</Form.Label>
	            <Form.Control type="text" name="lastname" placeholder="Please enter your lastname" required />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Username</Form.Label>
	            <Form.Control type="text" name="username" placeholder="Please enter your username" required />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Password</Form.Label>
	            <Form.Control type="password" name="password" placeholder="Please enter your password" required />
	          </Form.Group>
	          <Form.Group>
	            <Form.Label>Repeat password</Form.Label>
	            <Form.Control type="password" name="rpassword" placeholder="Please repeat-password" required />
	          </Form.Group>
	          <Form.Group className="d-flex flex-wrap">
	            <Button variant="primary" className="submit" type="submit">Sign up</Button>
	            <div className="link">
	            	<a href="/signin" className="link-content">I already have an account</a>
	            </div>
	          </Form.Group>
	        </Form>
	    </div>
    )
}
Dashboard.propTypes = {
  siteName: PropTypes.string
};
export default Dashboard