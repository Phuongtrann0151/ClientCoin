import React, { useState } from "react"
import {
    Tab,
    Form,
    Button,
    Tabs
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import addDot from "./Controler/addDotToNumberString"
import Bill from "./Bill"

const FormBuySell = (props) => {
    const [quantityBuy, setQuantityBuy] = useState("")
    const [errorQuantityBuy, setErrorQuantityBuy] = useState("")
    const [emailBuy, setEmailBuy] = useState("")
    const [errEmailBuy, setErrEmailBuy] = useState("")
    const [addressReceiveBuy, setAddressReceiveBuy] = useState("")
    const [errAddressReceiveBuy, setErrAddressReceiveBuy] = useState("")
    const [paidBuy, setPaidBuy] = useState(0)
    const [infoBill, setInfoBill] = useState({})

    const [addressReceiveSell, setAddressReceiveSell] = useState("")
    const [quantitySell, setQuantitySell] = useState("")
    const [emailSell, setEmailSell] = useState("")
    const [paidSell, setPaidSell] = useState(0)
    const [errorQuantitySell, setErrorQuantitySell] = useState("")
    const [numberAccount, setNumberAccount] = useState("")
    const [accountName, setAccountName] = useState("")

    const [sttPostBuy, setSttPostBuy] = useState(false)

    const changePaidBuy = (val) =>{
	    setQuantityBuy(val)
	    setPaidBuy(val*props.priceBuy)
    	if((val*props.priceBuy)<=props.limitTopBuy&&(val*props.priceBuy)>=props.limitBotBuy){
    		setErrorQuantityBuy("")
    	}else{
    		setErrorQuantityBuy("Vui lòng nhập số lượng trong giới hạn cho phép!")
    	}
    }
    const validEmailBuy = (val)=>{
    	setEmailBuy(val)
    	if(props.regexEmail.test(val)){
    		setErrEmailBuy("")
    	}else{
    		setErrEmailBuy("Vui lòng nhập đúng định dạng email!")
    	}
    }
    const validAddressBuy = (val)=>{
    	setAddressReceiveBuy(val)
    	if(/^[a-zA-Z0-9]+$/.test(val)){
    		setErrAddressReceiveBuy("")
    	}else{
    		setErrAddressReceiveBuy("Vui lòng nhập đúng định dạng địa chỉ nhận coin!")
    	}
    }
    const changePaidSell = (val) =>{
	    setQuantitySell(val)
	    setPaidSell(val*props.priceSell)
    	if((val*props.priceSell)<=props.limitTopSell&&(val*props.priceSell)>=props.limitBotSell){
    		setErrorQuantitySell("")
    	}else{
    		setErrorQuantitySell("Vui lòng nhập số lượng trong giới hạn cho phép!")
    	}
    }
    const submitBuy = async() =>{
    	if(true){
	    	var data = {
	    		"quantity" : Number(quantityBuy),
	    		"email"    : emailBuy,
	    		"address"  : addressReceiveBuy
	    	}
	    	try{
	    		const submitFormBuy = await axios({
		    		method: 'post',
		            url: '/buycoin',
		            headers: {
		              'Content-Type': 'application/json'
		            },
		            data: data
		    	})
	    		if(submitFormBuy.status===200){
	    			setSttPostBuy(true)
	    			setInfoBill(submitFormBuy.data)
	    		}
	    	}catch(e){
	    		console.log(e);
	    	}
    	}else{
    		setErrorQuantityBuy("Vui lòng nhập số lượng coin cần mua!")
    	}
    }

    return (
        <div className="mt-4 shadow-container disable-mt-640 buysell">
            {(sttPostBuy)?(
            	<Bill
            		info = {infoBill}
            		price = {props.priceBuy}
            	/>
            	):(<Tabs
              	fill justify
              	onSelect={(t) => props.changeStatus(t==="true")}
              	activeKey={props.status}
              	id="controlled-tab-example"
            >
              <Tab eventKey="true" title="Mua ngay" className="w-90 custom-tab-content">
                <Form>
		          <Form.Group>
		            <Form.Label>Số lượng:</Form.Label>
		            <Form.Control 
		            	type="number" 
		            	value={quantityBuy} 
		            	onChange={e=>changePaidBuy(e.target.value) } 
		            	onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault()}
		            	placeholder="Vui lòng nhập số lượng cần mua" 
		            	required
		            />
		           	<span className="text-danger">{errorQuantityBuy}</span>
		          </Form.Group>
		          <Form.Group>
		            <Form.Label>Nhận hoá đơn giao dịch:</Form.Label>
		            <Form.Control 
		            	type="email" 
		            	value={emailBuy} 
		            	onChange={e=>validEmailBuy(e.target.value)} 
		            	placeholder="Vui lòng nhập email nhận hoá đơn" 
		            	required
		            />
		            <span className="text-danger">{errEmailBuy}</span>
		          </Form.Group>
		          <Form.Group>
		            <Form.Label>Số tiền cần thanh toán:</Form.Label>
		            <Form.Control 
		            	type="text" 
		            	value={paidBuy} 
		            	className="bg-primary text-light text-right border-0" 
		            	placeholder="Vui lòng nhập email nhận hoá đơn" 
		            	readOnly
		            />
		          </Form.Group>
		          <Form.Group>
		            <Form.Label className="text-right w-100 text-danger">
		            	<FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
		            	Giới hạn : {addDot(props.limitBotBuy)} - {addDot(props.limitTopBuy)} VND
		            </Form.Label>
		          </Form.Group>
		          <Form.Group>
		            <Form.Label>Địa chỉ nhận coin:</Form.Label>
		            <Form.Control 
		            	type="text" 
		            	value={addressReceiveBuy} 
		            	className=""
		            	onChange={e=>validAddressBuy(e.target.value)}
		            	placeholder="Vui lòng nhập địa chỉ nhận coin"
		            />
		            <span className="text-danger">{errAddressReceiveBuy}</span>
		          </Form.Group>
		          <Form.Group className="d-flex flex-wrap  pb-4">
		            <Button variant="primary" className="submit" onClick={()=>submitBuy()} type="button">Mua ngay</Button>
		          </Form.Group>
		        </Form>
              </Tab>
              <Tab eventKey="false" title="Bán Ngay" className="w-90 custom-tab-content">
		        	<Form>
			          <Form.Group>
			            <Form.Label>Số lượng:</Form.Label>
			            <Form.Control 
			            	type="number" 
			            	value={quantitySell} 
			            	onChange={e=>changePaidSell(e.target.value) } 
			            	onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault()}
			            	placeholder="Vui lòng nhập số lượng cần mua" 
			            	required
			            />
			            <span className="text-danger">{errorQuantityBuy}</span>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Nhận hoá đơn giao dịch:</Form.Label>
			            <Form.Control 
			            	type="email" 
			            	value={emailSell} 
			            	onChange={e=>setEmailSell(e.target.value)} 
			            	placeholder="Vui lòng nhập email nhận hoá đơn" 
			            	required
			            />
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Tạm tính:</Form.Label>
			            <Form.Control 
			            	type="text" 
			            	value={paidSell} 
			            	className="bg-primary text-light text-right border-0" 
			            	placeholder="Vui lòng nhập email nhận hoá đơn" 
			            	readOnly
			            />
			          </Form.Group>
			          <Form.Group>
			            <Form.Label className="text-right w-100 text-danger">
			            	<FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
			            	Giới hạn : {addDot(props.limitBotSell)} - {addDot(props.limitTopSell)} VND
			            </Form.Label>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Ngân hàng: </Form.Label>
			            <Form.Control as="select" custom>
						    <option>Vui lòng chọn</option>
					      	<option>(AGRIBANK) Nông nghiệp và phát triển nông thôn Việt Nam</option>
							<option>(BIDV) Đầu tư và phát triển Việt Nam</option>
							<option>(VIETINBANK) Công Thương Việt Nam</option>
							<option>(VPBANK) Việt Nam Thịnh Vượng</option>
							<option>(ABBANK) An Bình</option>
							<option>(ACB) Á Châu</option>
							<option>(BAC A) Bắc Á</option>
							<option>(BAO VIET BANK) Bảo Việt</option>
							<option>(CBBANK) Ngân hàng Xây dựng </option>
							<option>(CIMB) CIMB Bank Việt Nam</option>
							<option>(DONG A BANK) Đông Á</option>
							<option>(EXIMBANK) Xuất Nhập khẩu</option>
							<option>(GPBANK) Dầu khí toàn cầu</option>
							<option>(HD BANK) Phát triển TP.HCM</option>
							<option>(HLBANK) Hong Leong Việt Nam</option>
							<option>(HSBC) TNHH MTV HSBC Việt Nam </option>
							<option>(IBK Bank) Công nghiệp Hàn Quốc </option>
							<option>(IVB) Trách nhiệm hữu hạn Indovina</option>
							<option>(KIEN LONG BANK) Kiên Long</option>
							<option>(LIEN VIET POST BANK) Bưu điện Liên Việt</option>
							<option>(MB) Quân Đội</option>
							<option>(MSB - MARITIME BANK) Hàng Hải</option>
							<option>(NAM A BANK) Nam Á</option>
							<option>(NCB) Quốc Dân</option>
							<option>(NHB) Nonghuyp - Chi nhánh Hà Nội</option>
							<option>(OCB) Phương Đông</option>
							<option>(OCEANBANK) Đại dương</option>
							<option>(PGBANK) Xăng Dầu Petrolimex</option>
							<option>(PUBLIC BANK) Đại chúng Việt Nam</option>
							<option>(PVCOMBANK) Đại chúng</option>
							<option>(SACOMBANK) Sài Gòn thương tín</option>
							<option>(SAIGONBANK) Sài Gòn Công Thương</option>
							<option>(SCB) Sài Gòn</option>
							<option>(SCVN) TNHH MTV Standard Chartered Việt Nam </option>
							<option>(SEABANK) Đông Nam Á</option>
							<option>(SHB) Sài Gòn Hà Nội</option>
							<option>(SHINHAN) Shinhan Bank Việt Nam</option>
							<option>(TECHCOMBANK) Kỹ thương Việt Nam</option>
							<option>(TPBANK) Tiên phong</option>
							<option>(UOB VN) UOB Việt Nam</option>
							<option>(VIB) Quốc tế</option>
							<option>(VIET A BANK) Việt Á</option>
							<option>(VIET CAPITAL BANK) Bản Việt</option>
							<option>(VIETBANK) Việt Nam Thương Tín</option>
					    </Form.Control>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Tên chủ tài khoản nhận tiền:</Form.Label>
			            <Form.Control 
			            	type="email" 
			            	value={accountName} 
			            	onChange={e=>setAccountName(e.target.value)} 
			            	placeholder="Vui lòng nhập tên in trên thẻ/tên chủ tài khoản(không dấu)" 
			            	required
			            />
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Số tài khoản nhận tiền:</Form.Label>
			            <Form.Control 
			            	type="number"
		            		onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault()}
			            	value={numberAccount} 
			            	onChange={e=>setNumberAccount(e.target.value)} 
			            	placeholder="Vui lòng nhập tên in trên thẻ/tên chủ tài khoản(không dấu)" 
			            	required
			            />
			          </Form.Group>
			          <Form.Group className="d-flex flex-wrap pb-4">
			            <Button variant="primary" className="submit" type="submit">Bán ngay</Button>
			          </Form.Group>
			        </Form>
              </Tab>
            </Tabs>  )}
        </div>
    )
}

FormBuySell.propTypes = {
    changeStatus: PropTypes.func,
    status: PropTypes.bool,
    regexEmail: PropTypes.object,
    priceBuy: PropTypes.number,
    priceSell: PropTypes.number,
    limitBotBuy: PropTypes.number,
    limitBotSell: PropTypes.number,
    limitTopBuy: PropTypes.number,
    limitTopSell: PropTypes.number,
};

export default FormBuySell