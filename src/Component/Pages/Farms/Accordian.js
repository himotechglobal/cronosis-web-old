import React from "react";
import Accordion from "react-bootstrap/Accordion";
import icon1 from "../../../Images/icon1.png";
import icon2 from "../../../Images/icon2.png";
// import zap from "../../../Images/zap.png";
import Modals from "../../Modal/Modals";

const Accordian = () => {
  return (
    <>
      <div className="accordian1">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="acc1">
                      <div className="accicon">
                        <img src={icon1} alt="" className="me-1" />
                        <img src={icon2} alt="" />
                      </div>
                      <div className="acros">
                        <div className="day">
                          <h5>CROS/MMF</h5>
                          <p>7,951 CROS Per Day</p>
                        </div>
                        <Modals />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="acc2">
                      <div className="tvl">
                        <p>TVL</p>
                        <h5>$4,287</h5>
                      </div>
                      <div className="deposited earn">
                        <p>Deposited</p>
                        <h5>-</h5>
                      </div>
                      <div className="earn">
                        <p>Earn</p>
                        <h5>-</h5>
                      </div>
                      <div className="earn">
                        <p>APR</p>
                        <h5>-</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="deposit">
                      <div className="text_1">
                        <p>Deposit</p>
                        <p className="p_text">Balance: -</p>
                      </div>
                      <div className="deposit-input">
                        <input type="text" placeholder="0.0" />
                      </div>
                      <div className="depositbtn">
                        <button>Deposit</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="deposit">
                      <div className="text_1">
                        <p>Withdraw</p>
                        <p className="p_text">Deposited: -</p>
                      </div>
                      <div className="deposit-input">
                        <input type="text" placeholder="0.0" />
                      </div>
                      <div className="depositbtn">
                        <div className="withdraw">
                          <button>Withdraw all</button>
                        </div>
                        <button>Deposit</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="deposit">
                      <div className="text_1">
                        <p>Reward</p>
                      </div>
                      <div className="claim_1">
                        <div className="reward">
                          <div className="reward-icon">
                            <img src={icon1} alt="" />
                          </div>
                          <p>-CROS</p>
                        </div>
                        <div className="button_claim">
                          <button>Claim</button>
                        </div>
                      </div>
                      <div className="add">
                        <p>Add LP</p>
                        <p>Remove LP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="comp2 pt-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="acc1">
                        <div className="accicon">
                          <img src={icon1} alt="" className="me-1" />
                          <img src={icon2} alt="" />
                        </div>
                        <div className="acros">
                          <div className="day">
                            <h5>CROS/MMF</h5>
                            <p>7,951 CROS Per Day</p>
                          </div>
                          <Modals/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="acc2">
                        <div className="tvl">
                          <p>TVL</p>
                          <h5>$4,287</h5>
                        </div>
                        <div className="deposited earn">
                          <p>Deposited</p>
                          <h5>-</h5>
                        </div>
                        <div className="earn">
                          <p>Earn</p>
                          <h5>-</h5>
                        </div>
                        <div className="earn">
                          <p>APR</p>
                          <h5>-</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="deposit">
                        <div className="text_1">
                          <p>Deposit</p>
                          <p className="p_text">Balance: -</p>
                        </div>
                        <div className="deposit-input">
                          <input type="text" placeholder="0.0" />
                        </div>
                        <div className="depositbtn">
                          <button>Deposit</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="deposit">
                        <div className="text_1">
                          <p>Withdraw</p>
                          <p className="p_text">Deposited: -</p>
                        </div>
                        <div className="deposit-input">
                          <input type="text" placeholder="0.0" />
                        </div>
                        <div className="depositbtn">
                          <div className="withdraw">
                            <button>Withdraw all</button>
                          </div>
                          <button>Deposit</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="deposit">
                        <div className="text_1">
                          <p>Reward</p>
                        </div>
                        <div className="claim_1">
                          <div className="reward">
                            <div className="reward-icon">
                              <img src={icon1} alt="" />
                            </div>
                            <p>-CROS</p>
                          </div>
                          <div className="button_claim">
                            <button>Claim</button>
                          </div>
                        </div>
                        <div className="add">
                          <p>Add LP</p>
                          <p>Remove LP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accordian;
