import React, { 
  useState, 
  useEffect
} from 'react';
import {
    Card
} from 'react-bootstrap';

import axios from 'axios'

import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as authFacebook  from "../actions/authFacebook"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Particles from 'react-particles-js';

import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Price from './Price';
import FormBuySell from './FormBuySell';
import Recent from './Recent';

import config from './Config/particles';
      // <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

const Home = (props) => {
  useEffect(() => {
      document.title = `Giao dịch mua bán win ${props.siteName}`;
      if(priceBuy===0){
        axios.get("/price").then(data=>{
          setPrice(data.data)
          setPriceBuy(data.data.priceBuy)
          setPriceSell(data.data.priceSell)
        }).catch(err=>{
          console.log(err);
          // alert("ERROR CONNECT SERVER")
        })
      }
  });
  const [price, setPrice] = useState({})
  const [priceBuy, setPriceBuy] = useState(0)
  const [priceSell, setPriceSell] = useState(0)
  const [statusBuySell, setStatusBuySell] = useState(true)
  const changeStatus = (stt)=>{
    setStatusBuySell(stt)
  }
  return (
    <>
      <Particles params={config} /> 
      <Header siteName={props.siteName}/>
      <div className="mt-5 mb-5 body">
          <div className="container">
            <h1 className="mb-5 fw-normal">{statusBuySell?"Mua":"Bán"} tiền điện tử nhanh chóng, an toàn, uy tín tại {props.siteName}</h1>
            <div className="girdview">
              <Price 
                info={props.info} 
                changeStatus={changeStatus} 
                status={statusBuySell} 
                priceBuy={priceBuy} 
                priceSell={priceSell}
              />
              <FormBuySell
                changeStatus={changeStatus} 
                status={statusBuySell} 
                regexEmail={props.regexEmail}
                price={price}
              />
              <Recent/>
              <div className="mt-4 shadow-container toturial">
                  <div>
                    {(statusBuySell)?(
                      <Card>
                        <Card.Header className="bg-primary text-light">
                          <Card.Title><FontAwesomeIcon icon={faQuestionCircle}/> Hướng dẫn mua WIN</Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title className="fw-400 fs-14">1. Nhập số lượng cần mua.</Card.Title>
                          <Card.Title className="fw-400 fs-14">2. Nhập email để nhận hóa đơn</Card.Title>
                          <Card.Title className="fw-400 fs-14">3. Số tiền bạn cần thanh toán sẽ được tự động tính toán theo tỉ giá hiện tại.</Card.Title>
                          <Card.Title className="fw-400 fs-14">4. Nhập địa chỉ nhận WIN (nếu chuyển vào Wefinex.Net thì địa chỉ này là địa chỉ nạp WIN trong phần Số Dư).</Card.Title>
                          <Card.Title className="fw-400 fs-14">5. Nhấn nút &quot;Mua ngay&quot;.</Card.Title>
                          <Card.Title className="fw-400 fs-14">6. Chuyển đúng số tiền cần thanh toán và điền đầy đủ thông tin STK, tên chủ TK, ghi chú như trong phần hướng dẫn thanh toán.</Card.Title>
                          <Card.Title className="fw-400 fs-14">7. WIN sẽ được chuyển ngay sau khi giao dịch được xác nhận trên hệ thống</Card.Title>
                          <Card.Title className="fw-400 fs-14">8. Hóa đơn sẽ được gửi vào địa chỉ email của bạn sau khi giao dịch hoàn tất.</Card.Title>
                        </Card.Body>
                      </Card>
                      ):(
                      <Card>
                        <Card.Header className="bg-primary text-light">
                          <Card.Title><FontAwesomeIcon icon={faQuestionCircle}/> Hướng dẫn bán WIN</Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title className="fw-400 fs-14">1. Nhập số lượng cần bán.</Card.Title>
                          <Card.Title className="fw-400 fs-14">2. Nhập email để nhận hóa đơn</Card.Title>
                          <Card.Title className="fw-400 fs-14">3. Số tiền bạn nhận sẽ được tự động tính toán theo tỉ giá hiện tại.</Card.Title>
                          <Card.Title className="fw-400 fs-14">4. Chọn ngân hàng bạn sẽ nhận tiền.</Card.Title>
                          <Card.Title className="fw-400 fs-14">5. Nhập số tài khoản và tên chủ tài khoản.</Card.Title>
                          <Card.Title className="fw-400 fs-14">6. Nhấn nút &quot;Bán ngay&quot;.</Card.Title>
                          <Card.Title className="fw-400 fs-14">7. Chuyển đúng số lượng WIN cần bán vào địa chỉ trong mục &quot;Hướng dẫn thanh toán&quot;.</Card.Title>
                          <Card.Title className="fw-400 fs-14">8. Tiền sẽ được chuyển ngay sau khi giao dịch được xác nhận trên hệ thống</Card.Title>
                          <Card.Title className="fw-400 fs-14">9. Hóa đơn sẽ được gửi vào địa chỉ email của bạn sau khi giao dịch hoàn tất.</Card.Title>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
              </div>
            </div>
          </div>
      </div>
      <Footer siteName={props.siteName} info={props.info} regexEmail={props.regexEmail}/>
    </>
  );
}

function mapStateToProps(state, props){
  return {status: state.status }
}

function mapDispacthToProps(dispacth){
  return {
    action : bindActionCreators(authFacebook, dispacth)
  }
}

Home.propTypes = {
  siteName: PropTypes.string,
  info: PropTypes.object,
  regexEmail: PropTypes.object,
};

export default connect(mapStateToProps, mapDispacthToProps)(Home)