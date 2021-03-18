import React, { useState } from "react"
import {
    Card,
    ListGroup,
    Tabs
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowDown, faArrowUp, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const Recent = (props) => {
	return (
        <div className="mt-4 shadow-container recent disable-mt-1024">
        	<Card>
              	<Card.Header className="bg-primary text-light">
                	<Card.Title>
                		<FontAwesomeIcon icon={faShoppingCart}/> Giao dịch gần đây
                	</Card.Title>
              	</Card.Header>
              	<Card.Body>
              		<ListGroup>
						<ListGroup.Item className="shadow-container">
							<div className="d-flex recent-height-item">
								<div className="d-flex recent-ctn-btn">
									<button className="pl-1 pr-1 pt-0 pb-0 mr-2 btn-success border-0 recent-btn">
										<FontAwesomeIcon icon={faArrowDown} className="text-light"/>
									</button>
									<div>
										<p>Mua</p>
									</div>
								</div>
								<div className="">
									<h6 className="d-flex ">
               							180 <img src="/WIN.svg" className="ml-1" width="20px" alt="win"/>
									</h6>
								</div>
							</div>
							<div className="d-flex">
								<div className="d-flex recent-ctn-btn">
									<div>
										<p className="fs-12">5 phút trước</p>
									</div>
								</div>
								<div className="">
									<a className="d-flex">
               							<FontAwesomeIcon icon={faMoneyBillWave}/>120,000,802 VND
									</a>
								</div>
							</div>
						</ListGroup.Item>
					</ListGroup>
              	</Card.Body>
        	</Card>
        </div>
	)
}


export default Recent;