import React, { 
  useState, 
  useEffect
} from 'react';
import {
    Card,
    Tabs
} from 'react-bootstrap';

import axios from 'axios'

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
  useEffect(async() => {
      document.title = `Giao dịch mua bán win ${props.siteName}`;
      var data = (await axios.get("/price")).data
      setPriceBuy(data.priceBuy)
      setPriceSell(data.priceSell)
      setLimitBotBuy(data.limitBotBuy)
      setLimitBotSell(data.limitBotSell)
      setLimitTopBuy(data.limitTopBuy)
      setLimitTopSell(data.limitTopSell)
  });
  const [priceBuy, setPriceBuy] = useState(0)
  const [priceSell, setPriceSell] = useState(0)
  const [limitBotBuy, setLimitBotBuy] = useState(0)
  const [limitBotSell, setLimitBotSell] = useState(0)
  const [limitTopBuy, setLimitTopBuy] = useState(0)
  const [limitTopSell, setLimitTopSell] = useState(0)
  const myRef = React.createRef()
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
                priceBuy={priceBuy} 
                priceSell={priceSell} 
                limitBotBuy={limitBotBuy} 
                limitBotSell={limitBotSell}
                limitTopBuy={limitTopBuy}
                limitTopSell={limitTopSell}
              />
              <Recent/>
              <div className="mt-4 shadow-container toturial">
                  <div>
                    <Card>
                      <Card.Header className="bg-primary text-light">
                        <Card.Title><FontAwesomeIcon icon={faQuestionCircle}/> Hướng dẫn bán WIN</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title className="fw-400 fs-14">1. Chọn loại coin: WIN.</Card.Title>
                        <Card.Title className="fw-400 fs-14">2. Nhập số lượng cần bán.</Card.Title>
                        <Card.Title className="fw-400 fs-14">3. Nhập email để nhận hóa đơn (có thể bỏ trống).</Card.Title>
                        <Card.Title className="fw-400 fs-14">4. Số tiền bạn nhận sẽ được tự động tính toán theo tỉ giá hiện tại.</Card.Title>
                        <Card.Title className="fw-400 fs-14">5. Chọn ngân hàng bạn sẽ nhận tiền.</Card.Title>
                        <Card.Title className="fw-400 fs-14">6. Nhập số tài khoản và tên chủ tài khoản.</Card.Title>
                        <Card.Title className="fw-400 fs-14">7. Nhấn nút &quot;Bán&quot;.</Card.Title>
                        <Card.Title className="fw-400 fs-14">8. Chuyển đúng số lượng WIN cần bán vào địa chỉ trên màn hình hoặc chuyển nội bộ trong Wefinex.</Card.Title>
                        <Card.Title className="fw-400 fs-14">9. Tiền sẽ được chuyển ngay sau khi giao dịch được xác nhận trên blockchain.</Card.Title>
                        <Card.Title className="fw-400 fs-14">10. Hóa đơn sẽ được gửi vào địa chỉ email của bạn.</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <Footer siteName={props.siteName} info={props.info} regexEmail={props.regexEmail}/>
    </>
  );
}

Home.propTypes = {
  siteName: PropTypes.string,
  info: PropTypes.object,
  regexEmail: PropTypes.object,
};

export default Home