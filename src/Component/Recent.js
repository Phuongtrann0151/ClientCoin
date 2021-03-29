import React from "react"
import {
    Card,
    ListGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArrowDown, faArrowUp, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

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
						<ListGroup.Item className="shadow-container">
							<div className="d-flex recent-height-item">
								<div className="d-flex recent-ctn-btn">
									<button className="pl-1 pr-1 pt-0 pb-0 mr-2 btn-success border-0 recent-btn">
										<FontAwesomeIcon icon={faArrowDown} className="text-primary"/>
									</button>
									<div>
										<p className="fw-400 text-dark">Mua</p>
									</div>
								</div>
								<div className="">
									<h6 className="d-flex text-dark">
               							180 <img src="/WIN.svg" className="ml-1" width="20px" alt="win"/>
									</h6>
								</div>
							</div>
							<div className="d-flex flex-column-reverse">
								<div className="d-flex recent-ctn-btn">
									<div>
										<p className="fs-12 fw-400 text-dark">5 phút trước</p>
									</div>
								</div>
								<div className="">
									<p className="d-flex fw-400 text-dark d-flex" style={{"lineHeight": "1em"}}>
               							<FontAwesomeIcon icon={faExchangeAlt} className="text-dark"/>12,000,802 VND
									</p>
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