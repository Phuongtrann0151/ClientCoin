import React, { 
  // useState
} from 'react';
import {
    Card
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll, faEnvelopeOpenText, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import addDot from "./Controler/addDotToNumberString"


const Price = (props)=>{
  return (
      <Card className="shadow-container price">
        <Card.Header className="bg-primary text-dark">
          <Card.Title><FontAwesomeIcon icon={faPoll} className="text-light"/> Tỉ lệ giao dịch</Card.Title>
        </Card.Header>
        <Card.Body>
          <div>
            <Card.Title className="fw-100 h6 d-flex">
              <div>Loại tiền tệ : </div>
              <div className="text-danger fw-400">&nbsp;VND</div>
            </Card.Title>
          </div>
          <hr/>
          <div>
            <Card.Title className="fw-100 h6 d-flex">
              <div>Bạn muốn </div> 
              <div className="text-success fw-400">&nbsp;MUA</div>
            </Card.Title>
            <div 
              className={props.status?"w-100 d-flex p-2 btn-inactive active active-price":"w-100 d-flex p-2 btn-inactive"} 
              onClick={()=>props.changeStatus(true)}
              >
              <div className="ct-icon w-25 d-flex fw-400">
                <img src="/WIN.svg" className="icon-win w-25 mr-2" alt="win"/>WIN
              </div>
              <div className="w-75">
                <div className="fw-400 text-right">
                  {addDot(props.priceBuy)} 
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div>
            <Card.Title className="fw-100 h6 d-flex">
              <div>Bạn muốn </div> 
              <div className="text-danger fw-400">&nbsp;BÁN</div>
            </Card.Title>
            <div 
              className={props.status?"w-100 d-flex p-2 btn-inactive border-danger":"w-100 d-flex p-2 btn-inactive border-danger bg-danger active-price"} 
              onClick={()=>props.changeStatus(false)}
              >
              <div className="ct-icon w-25 d-flex fw-400">
                <img src="/WIN.svg" className="icon-win w-25 mr-2" alt="win"/>WIN
              </div>
              <div className="w-75">
                <div className="fw-400 text-right">
                  {addDot(props.priceSell)} 
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div>
            <Card.Title className="h6 text-info fw-400">Hỗ trợ :</Card.Title>
            <Card.Body className="d-flex flex-wrap pl-0 pr-0">
              <a href={"mailto:support@"+props.siteName.toLowerCase()+"."+props.siteName.split(".")[props.siteName.split(".").length-1].toLowerCase()} className="w-100 d-flex">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-25 mt-1"/>
                <p className="fw-400">{"support@"+props.siteName.toLowerCase()}</p>
              </a>
              
            </Card.Body>
          </div>
        </Card.Body>
      </Card>
    )
}
Price.propTypes = {
  info: PropTypes.object,
  changeStatus: PropTypes.func,
  siteName: PropTypes.string,
  status: PropTypes.bool,
  priceSell: PropTypes.number,
  priceBuy: PropTypes.number
};

export default Price;
// <a href={props.info.company.phone} className="w-100 d-flex">
//   <FontAwesomeIcon icon={faMobileAlt} className="w-25 mt-1"/>
//   <p className="fw-400">{props.info.company.phone.split(":")[1]}</p>
// </a>



// onClick={()=>setStatusBuySell(true)
  // onClick={()=>setStatusBuySell(false)}