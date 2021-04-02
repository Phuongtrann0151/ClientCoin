import React, {useState} from "react"
import {
	Card,
	Table,
	OverlayTrigger,
	Tooltip
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faExclamationTriangle, faHandPointRight } from '@fortawesome/free-solid-svg-icons'


import addDot from "./Controler/addDotToNumberString"
import convertTime from "./Controler/convertTime"

const Bill = (props) => {
	const [placement, setPlacement] = useState("Click to copy")
	const renderTooltip = (props) => (
	  <Tooltip id="button-tooltip" {...props}>
	    <p className="fw-400 text-light" style={{"paddingBottom": "0em", "marginBottom": "0em"}}>{placement}</p>
	  </Tooltip>
	);
	const cpclipboard = (val)=>{
		navigator.clipboard.writeText(val)
		setPlacement("copied")
		setTimeout(()=>{setPlacement("Click to copy")}, 500);
	}
    return (
    	<Card className="shadow-container price">
	        <Card.Header className={(!props.info.bank)?'bg-success text-primary':'bg-danger text-primary'}>
	          <Card.Title>Hóa đơn xác nhận {(!props.info.bank)?"mua":"bán"} WIN </Card.Title>
	        </Card.Header>
	        <Card.Body>
	        	<Table striped bordered hover variant="dark" className="text-primary">
				  <tbody>
				  		<tr>
				      		<td className="fw-400 w-max-content">Mã giao dịch</td>
					      	<td className="fw-400">
					      		<OverlayTrigger
								    placement="right"
								    delay={{ show: 250, hide: 400 }}
								    overlay={renderTooltip}
								>
					      			<b className="pointer" onClick={()=>{cpclipboard((!props.info.bank)?"BWC"+props.info.index:"SWC"+props.info.index)}}>{(!props.info.bank)?"BWC":"SWC"}{props.info.index}</b>
								</OverlayTrigger>
					      		<br/>
					      		<FontAwesomeIcon className="text-warning mr-2" icon={faExclamationTriangle}/>
					      		Lưu lại mã này nếu bạn cần kiểm tra lại giao dịch.
					      	</td>
				    	</tr>
			  		{(!props.info.bank)?(
				  		<tr>
				  			<td className="fw-400 w-max-content">Hướng dẫn thanh toán</td>
					      	<td className="fw-400">
					      		<ul>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Vui lòng chuyển khoản cho tài khoản <b>{props.price.bankName}</b> sau:
					      			</li>
					      			<li className="ld-none fw-400 pointer">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Số tài khoản ngân hàng : 
					      				<OverlayTrigger
										    placement="right"
										    delay={{ show: 250, hide: 400 }}
										    overlay={renderTooltip}
										>
										    <b className="ml-1" onClick={()=>{cpclipboard(props.price.numberAccount)}}>{props.price.numberAccount}</b>
										</OverlayTrigger>
					      			</li>
					      			<li className="ld-none fw-400 pointer">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Tên chủ tài khoản: <b>{props.price.nameAccount}</b>
					      			</li>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Số tiền: <b>{addDot(Number(props.info.quantity)*props.info.rate)} VND</b>
					      			</li>
					      			<li className="ld-none fw-400 pointer">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Nội dung chuyển khoản: 
					      				<OverlayTrigger
										    placement="right"
										    delay={{ show: 250, hide: 400 }}
										    overlay={renderTooltip}
										>
					      					<b className="ml-1" onClick={()=>{cpclipboard("BWC"+props.info.index)}}>BWC{props.info.index}</b>
										</OverlayTrigger>
					      			</li> 
					      		</ul>
					      	</td>
					   	</tr>):(
					   	<tr>
					   		<td className="fw-400 w-max-content">Hướng dẫn thanh toán</td>
					      	<td className="fw-400">
					      		<ul>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Vui lòng chuyển <b>nội bộ</b> Wefinex 1 lần duy nhất <b> {addDot(Number(props.info.quantity))}<img src="/WIN.svg" className="icon-win-bill ml-1" alt="win"/></b>
					      			</li>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Nickname: 
					      				<OverlayTrigger
										    placement="right"
										    delay={{ show: 250, hide: 400 }}
										    overlay={renderTooltip}
										>
					      					<b className="pointer ml-1" onClick={() => {cpclipboard(props.price.wefinexID)}}>{props.price.wefinexID}</b>
										</OverlayTrigger>
					      			</li>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Hoặc chuyển <b>1 lần duy nhất đúng {addDot(Number(props.info.quantity))} <img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/></b> vào địa chỉ: 
					      				<OverlayTrigger
										    placement="right"
										    delay={{ show: 250, hide: 400 }}
										    overlay={renderTooltip}
										>
					      					<b className="pointer ml-1" onClick={()=>{cpclipboard(props.price.wefinexAddress)}}>{props.price.wefinexAddress}</b>
										</OverlayTrigger>
					      			</li>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Số coin: <b>{addDot(Number(props.info.quantity))} <img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/></b>
					      			</li>
					      			<li className="ld-none fw-400">
					      				<FontAwesomeIcon icon={faHandPointRight} className="text-success mr-2"/>Với ghi chú: <b className="pointer">SWC{props.info.index}</b>
					      			</li> 
					      		</ul>
					      	</td>	
					   	</tr>
					   	)}
				  		{(!props.info.bank)?(
				  			<tr>
					      		<td className="fw-400 w-max-content">Bạn cần thanh toán</td>
						      	<td className="fw-400">{addDot(Number(props.info.quantity)*props.info.rate)} VND</td>
					    	</tr>
				  			):(
				  			<>
				  				<tr>
						      		<td className="fw-400 w-max-content">STK nhận tiền</td>
							      	<td className="fw-400 pointer"><b>{props.info.accountNumberBank}</b></td>
						    	</tr>
				  				<tr>
						      		<td className="fw-400 w-max-content">Tên TK</td>
							      	<td className="fw-400 pointer"><b>{props.info.accountNameBank}</b></td>
						    	</tr>
				  				<tr>
						      		<td className="fw-400 w-max-content">Ngân hàng</td>
							      	<td className="fw-400 pointer"><b>{props.info.bank}</b></td>
						    	</tr>
				  			</>
				  			)}
				  		<tr>
				      		<td className="text-danger"><FontAwesomeIcon icon={faExclamationCircle}/></td>
					      	<td className="text-danger fw-400">Chú ý: <br/> + Bạn hãy chuyển chính xác số {(!props.info.bank)?"tiền":"coin"} (kể cả số lẻ) và nội dung chuyển khoản như hướng dẫn (phần in đậm). <br/> + Nếu không hệ thống sẽ không tự động xử lý.</td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Bạn nhận</td>
					      	<td className="fw-400">{(!props.info.bank)?addDot(Number(props.info.quantity)):addDot(Number(props.info.quantity)*props.info.rate)} {(!props.info.bank)?<img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/>:"VND"}</td>
				    	</tr>
				    	{(!props.info.bank)?(
				    		<tr>
					      		<td className="fw-400 w-max-content">Địa chỉ nhận</td>
						      	<td className="fw-400">{props.info.address}</td>
					    	</tr>
					    ):null}
				  		<tr>
				      		<td className="fw-400 w-max-content">Tỉ giá</td>
					      	<td className="fw-400">{addDot(props.info.rate)}VND/<img src="/WIN.svg" className="icon-win-bill mr-2" alt="win"/></td>
				    	</tr>
				  		<tr>
				      		<td className="fw-400 w-max-content">Thời gian</td>
					      	<td className="fw-400">{convertTime(props.info.time)}</td>
				    	</tr>
				  </tbody>
				</Table>
				<div className="w-100 d-flex flex-row-reverse"><button className="btn btn-success text-primary" onClick={()=>window.location.href="/"}>Giao dịch khác</button></div>
	        </Card.Body>
        </Card>
    )
}

Bill.propTypes = {
    info: PropTypes.object,
    price: PropTypes.object,
};

export default Bill