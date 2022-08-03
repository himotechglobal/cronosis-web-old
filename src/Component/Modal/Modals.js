import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Modalbalance from "./Modalbalance";
import Modaldata from "./Modaldata";
import icon1 from "../../Images/icon1.png";
import icon2 from "../../Images/icon2.png";
import zap from "../../Images/zap.png";

const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="zap" onClick={handleShow}>
        <img src={zap} alt="" />
      </div>
      <Modal show={show} onHide={handleClose} className="modal1">
        <Modal.Header closeButton>
          <Modal.Title>Zap Into Farm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <p>From</p>
            {Modaldata.map((option) => {
              return <Modalbalance Modaldata={option} />;
            })}
            <p>to</p>
            <div className="middle-div">
              <div className="first-row">
                <div className="first-img">
                  <img src={icon1} alt="" />
                </div>
                <div className="first-img">
                  <img src={icon2} alt="" />
                </div>
                <div className="textright">
                  <div className="crostext">
                    <h5>CROS/MMF</h5>
                    <span className="span1">-</span>
                  </div>
                  <div className="crostext">
                    <h5 className="mm">MM Finance</h5>
                    <span>-</span>
                  </div>
                </div>
              </div>
              <div className="second-row">
                <p>Est. Allocation</p>
                <div className="cros1">
                  <img src={icon1} alt="" />
                  <div className="crosflex">
                    <h5>CROS</h5>
                    <span>-</span>
                  </div>
                </div>
                <div className="cros1 pt-2 mb-3">
                  <img src={icon2} alt="" />
                  <div className="crosflex">
                    <h5>MMF</h5>
                    <span>-</span>
                  </div>
                </div>
              </div>
              <div className="third-row">
                <div className="leftside">
                  <h6>APR</h6>
                  <h5>175%</h5>
                </div>
                <div className="rightside">
                  <h6>Est. Daily Income</h6>
                  <h5>$0</h5>
                </div>
              </div>
            </div>
            <div className="fee">
              <div className="bag1">
                <p>Mint Fee</p>
                <p>Minimum Received</p>
                <p>Slippage</p>
              </div>
              <div className="bag2">
                <p>0.3%</p>
                <p>0 MMF</p>
                <div className="buttons">
                  <button className="btn1">0.5%</button>
                  <button className="btn2">1%</button>
                  <button className="btn2">2%</button>
                  <div className="input">
                    <input type="text" placeholder="0.5" value={0.5} />
                    <span className="input-span">%</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="redeem-btn">Connect Wallet</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
