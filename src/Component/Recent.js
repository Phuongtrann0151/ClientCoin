import React, {useEffect, useState} from "react"
import {
    Card,
    ListGroup
} from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import PropTypes from 'prop-types';
import timeSince from './Controler/timeSince';
import addDot from "./Controler/addDotToNumberString"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowDown, faArrowUp, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const NumberList = (props)=> {
	useEffect(()=>{
		// const socket = socketIOClient("/");
   //  	socket.on("notification", data => {
	  //     	if(recents.length>15){
	  //     		recents.slice(recents.length)
	  //   		setRecents(recents => [data, ...recents])
	  //     	}
	  //   });
	  //   socket.on("disconnect", ()=>{
			// try{
			//     socket.connect()
			// }catch(err){
			//     console.log(err);
			// }
	  //   })
	  //   socket.on("current", data => {
	  //     setRecents(data, "current");
	  //   });
   //  	socket.emit("current")
	})
	const [recents, setRecents] = useState([])
  return recents.map((recent, index) =>
    <ListGroup.Item className="shadow-container" key={index}>
		<div className="d-flex recent-height-item">
			<div className="d-flex recent-ctn-btn">
				<button className={(/BWC/.test(recent.index))?"pl-1 pr-1 pt-0 pb-0 mr-2 btn-success border-0 recent-btn":"pl-1 pr-1 pt-0 pb-0 mr-2 btn-danger border-0 recent-btn"}>
					<FontAwesomeIcon icon={(/BWC/.test(recent.index))?faArrowDown:faArrowUp} className="text-primary"/>
				</button>
				<div>
					<p className="fw-400 text-dark">{(/BWC/.test(recent.index))?"Mua":"Bán"}</p>
				</div>
			</div>
			<div className="">
				<h6 className="d-flex text-dark">
						{recent.quantity} <img src="/WIN.svg" className="ml-1" width="20px" alt="win"/>
				</h6>
			</div>
		</div>
		<div className="d-flex flex-column-reverse">
			<div className="d-flex recent-ctn-btn">
				<div>
					<p className="fs-12 fw-400 text-dark">{timeSince(recent.time)}</p>
				</div>
			</div>
			<div className="">
				<p className="d-flex fw-400 text-dark d-flex" style={{"lineHeight": "1em"}}>
						<FontAwesomeIcon icon={faExchangeAlt} className="text-dark mr-4"/>{(/BWC/.test(recent.index))?addDot(recent.quantity*props.price.priceBuy):addDot(recent.quantity*props.price.priceSell)} VND
				</p>
			</div>
		</div>
	</ListGroup.Item>
  );
}


const Recent = (props) => {
	return (
        <div className="mt-4 shadow-container recent disable-mt-1024">
        	<Card>
              	<Card.Header className="bg-primary text-dark">
                	<Card.Title>
                		<FontAwesomeIcon icon={faShoppingCart} className="text-light"/> Giao dịch gần đây
                	</Card.Title>
              	</Card.Header>
              	<Card.Body>
              		<ListGroup>
						<NumberList price={props.price}/>
					</ListGroup>
              	</Card.Body>
        	</Card>
        </div>
	)
}
Recent.propTypes = {
    price: PropTypes.object,
};

NumberList.propTypes = {
    price: PropTypes.object,
};

export default Recent;