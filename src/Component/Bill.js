import React, { useState } from "react"
import {
	Card,
	Table
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faExclamationTriangle, faHandPointRight } from '@fortawesome/free-solid-svg-icons'


import addDot from "./Controler/addDotToNumberString"
import convertTime from "./Controler/convertTime"

const Bill = (props) => {
    return (
    	<Card className="shadow-container price">
	        <Card.Header className="bg-success text-light">
	          <Card.Title>Hóa đơn xác nhận mua WIN</Card.Title>
	        </Card.Header>
	        <Card.Body>
	        	<Table striped bordered hover variant="dark" className="text-light">
				  <tbody>
				  		<tr>
				      		<td className="fw-400 w-max-content">Mã giao dịch</td>
					      	<td className="fw-400"><b>{props.info._id}</b><br/><FontAwesomeIcon className="text-warning mr-2" icon={faExclamationTriangle}/>Lưu lại mã này nếu bạn cần kiểm tra lại giao dịch.</td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Hướng dẫn thanh toán</td>
					      	<td className="fw-400">
					      		<ul>
					      			<li className="ld-none fw-400"><FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Vui lòng chuyển khoản cho tài khoản <b>Vietcombank</b> sau:</li>
					      			<li className="ld-none fw-400"><FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Số tài khoản ngân hàng: <b>1016840918</b></li>
					      			<li className="ld-none fw-400"><FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Tên chủ tài khoản: <b>NGUYEN MINH HAU</b></li>
					      			<li className="ld-none fw-400"><FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Số tiền: <b>{addDot(Number(props.info.quantity)*props.price)} VND</b></li>
					      			<li className="ld-none fw-400"><FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Nội dung chuyển khoản: <b>BWC{props.info.index}</b></li> 
					      		</ul>
					      	</td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Bạn cần thanh toán</td>
					      	<td className="fw-400">{addDot(Number(props.info.quantity)*props.price)} VND</td>
				    	</tr>
				  		<tr>
				      		<td className="text-danger"><FontAwesomeIcon icon={faExclamationCircle}/></td>
					      	<td className="text-danger fw-400">Chú ý: Bạn hãy chuyển chính xác số tiền (kể cả số lẻ) và nội dung chuyển khoản như hướng dẫn (phần in đậm). Nếu không chúng tôi sẽ không xử lý. Chúng tôi hiện tại không hỗ trợ chuyển khoản từ ví Momo.</td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Bạn nhận</td>
					      	<td className="fw-400">{addDot(Number(props.info.quantity))} <img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/></td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Địa chỉ nhận</td>
					      	<td className="fw-400">{props.info.address}</td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Tỉ giá</td>
					      	<td className="fw-400">{addDot(props.price)}VND/<img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/></td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Thời gian</td>
					      	<td className="fw-400">{convertTime(props.info.time)}</td>
				    	</tr>
				  </tbody>
				</Table>
				<div className="w-100 d-flex flex-row-reverse"><button className="btn btn-success text-light" onClick={()=>window.location.href="/"}>Giao dịch khác</button></div>
	        </Card.Body>
        </Card>
    )
}

Bill.propTypes = {
    info: PropTypes.object,
    price: PropTypes.number,
};

export default Bill