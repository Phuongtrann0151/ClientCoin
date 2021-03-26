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
import bank from "./Config/bank"
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
    // end buy
    const [quantitySell, setQuantitySell] = useState("")
    const [emailSell, setEmailSell] = useState("")
    const [paidSell, setPaidSell] = useState(0)
    const [errorQuantitySell, setErrorQuantitySell] = useState("")
    const [errorEmailSell, setErrorEmailSell] = useState("")
    const [numberAccount, setNumberAccount] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountName, setAccountName] = useState("")
    // end sell

    const [sttPostBuy, setSttPostBuy] = useState(false)

    const changePaidBuy = (val) =>{
	    setQuantityBuy(val)
	    setPaidBuy(val*props.price.priceBuy)
    	if((val*props.price.priceBuy)<=props.price.limitTopBuy&&(val*props.price.priceBuy)>=props.price.limitBotBuy){
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
    const validEmailSell = (val)=>{
    	setEmailSell(val)
    	if(props.regexEmail.test(val)){
    		setErrorEmailSell("")
    	}else{
    		setErrorEmailSell("Vui lòng nhập đúng định dạng email!")
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
	    setPaidSell(val*props.price.priceSell)
    	if((val*props.price.priceSell)<=props.price.limitTopSell&&(val*props.price.priceSell)>=props.price.limitBotSell){
    		setErrorQuantitySell("")
    	}else{
    		setErrorQuantitySell("Vui lòng nhập số lượng trong giới hạn cho phép!")
    	}
    }
    const validSubmitBuy = ()=>{
    	if(!props.regexEmail.test(emailBuy))
    		return false
    	if(!(/^[0-9]+$/.test(quantityBuy)))
    		return false
    	if(!((quantityBuy*props.price.priceBuy)<=props.price.limitTopBuy&&(quantityBuy*props.price.priceBuy)>=props.price.limitBotBuy))
    		return false
    	if(!(/^[a-zA-Z0-9]+$/.test(addressReceiveBuy)))
    		return false
    	return true
    }
    const validNameAccount = (e)=>{
    	if(/^[a-zA-Z ]+$/.test(e.target.value)){
    		setAccountName(e.target.value.toUpperCase())
    	}
    }
    const submitBuy = async() =>{
    	if(validSubmitBuy()){
	    	var data = {
	    		"quantity" : Number(quantityBuy),
	    		"email"    : emailBuy,
	    		"address"  : addressReceiveBuy
	    	}
	    	try{
	    		console.log(data);
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
    const validSubmitSell = ()=>{
    	if(!props.regexEmail.test(emailSell))
    		return false
    	if(!(/^[0-9]+$/.test(quantitySell)))
    		return false
    	if(!((quantitySell*props.price.priceSell)<=props.price.limitTopSell&&(quantitySell*props.price.priceSell)>=props.price.limitBotSell))
    		return false
    	if(bank.indexOf(bankName)===-1)
    		return false
    	if(!(/^[A-Z ]+$/.test(accountName)))
    		return false
    	if(!(/^[0-9]{4,}$/.test(numberAccount)))
    		return false
    	return true
    }
    const submitSell = async() =>{
    	if(validSubmitSell()){
	    	var data = {
	    		"quantity"  	     : Number(quantitySell),
	    		"email"       		 : emailSell,
	    		"bank"     	   		 : bankName,
	    		"accountNameBank"    : accountName,
	    		"accountNumberBank"  : numberAccount
	    	}
	    	try{
	    		const submitFormBuy = await axios({
		    		method: 'post',
		            url: '/sellcoin',
		            headers: {
		              'Content-Type': 'application/json'
		            },
		            data: data
		    	})
		    	console.log(data);
	    		if(submitFormBuy.status===200){
	    			setSttPostBuy(true)
	    			setInfoBill(submitFormBuy.data)
	    		}
	    	}catch(e){
	    		console.log(e);
	    	}
    	}else{
    		setErrorQuantitySell("Vui lòng nhập số lượng coin cần bán!")
    	}
    }
    const BankList = () => {
		return bank.map(bankname=><option key={bankname} value={bankname}>{bankname}</option>)
	}
    return (
        <div className="mt-4 shadow-container disable-mt-640 buysell">
            {(sttPostBuy)?(
            	<Bill
            		info = {infoBill}
            		price = {props.price}
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
		            	min="0" 
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
		            	value={addDot(paidBuy)+" VND"}
		            	className="bg-primary text-light text-right border-0" 
		            	readOnly
		            />
		          </Form.Group>
		          <Form.Group>
		            <Form.Label className="text-right w-100 text-danger">
		            	<FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
		            	Giới hạn : {addDot(props.price.limitBotBuy)} - {addDot(props.price.limitTopBuy)} VND
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
			            	min="0"
			            	required
			            />
			            <span className="text-danger">{errorQuantitySell}</span>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Nhận hoá đơn giao dịch:</Form.Label>
			            <Form.Control 
			            	type="email" 
			            	value={emailSell} 
			            	onChange={e=>validEmailSell(e.target.value)} 
			            	placeholder="Vui lòng nhập email nhận hoá đơn" 
			            	required
			            />
			            <span className="text-danger">{errorEmailSell}</span>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Tạm tính:</Form.Label>
			            <Form.Control 
			            	type="text" 
			            	value={addDot(paidSell)+" VND"} 
			            	className="bg-primary text-light text-right border-0" 
			            	placeholder="Vui lòng nhập email nhận hoá đơn" 
			            	readOnly
			            />
			          </Form.Group>
			          <Form.Group>
			            <Form.Label className="text-right w-100 text-danger">
			            	<FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
			            	Giới hạn : {addDot(props.price.limitBotSell)} - {addDot(props.price.limitTopSell)} VND
			            </Form.Label>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Ngân hàng: </Form.Label>
			            <Form.Control as="select" custom value={bankName} onChange={(e)=>setBankName(e.target.value)}>
						    <option>Vui lòng chọn</option>
					      	<BankList/>
					    </Form.Control>
			          </Form.Group>
			          <Form.Group>
			            <Form.Label>Tên chủ tài khoản nhận tiền:</Form.Label>
			            <Form.Control 
			            	type="text" 
			            	value={accountName} 
			            	onChange={e=>validNameAccount(e)} 
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
			            	min="0"
			            	onChange={e=>setNumberAccount(e.target.value)} 
			            	placeholder="Vui lòng nhập số tài khoản hoặc số in trên thẻ" 
			            	required
			            />
			          </Form.Group>
			          <Form.Group className="d-flex flex-wrap pb-4">
			            <Button variant="primary" className="submit" onClick={()=>submitSell()} type="button">Bán ngay</Button>
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
    price: PropTypes.object
};

export default FormBuySell