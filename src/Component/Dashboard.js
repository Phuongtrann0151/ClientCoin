// import React, {
// 	useEffect,
//     useState
// } from 'react';
// import {
//     Button,
//     Form,
//     // Button,
//     // Button,
// } from 'react-bootstrap';

// import {useLocation} from 'react-router-dom'

// import PropTypes from 'prop-types';
// import axios from 'axios';

// // import {
// //   BrowserRouter as Router,
// //   Route, 
// //   Switch 
// // } from 'react-router-dom'


// const Dashboard = (props) =>{
// 	useEffect(() => {
// 	    document.title = `Đăng ký mua bán win tại ${props.siteName}`;
// 	    axios.get("http://localhost:3333/user").then(res=>console.log(res))
// 	});
// 	const useQuery = ()=> {
// 	  return new URLSearchParams(useLocation().search);
// 	}
//     const [errorMsg, setErrorMsg] = useState("")
//     const onSubmit = () => {

//     }
//     let query = useQuery();
//     console.log(query.get("code"));
//     return ( 
//         <>
//         	<h1>hello : {window.location.href} </h1>
//         	<h1></h1>
//         </>
//     )
// }
// Dashboard.propTypes = {
//   siteName: PropTypes.string
// };
// export default Dashboard