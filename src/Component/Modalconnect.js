import React from "react";
import icon1 from "../Images/icon1.png";
import icon3 from "../Images/icon3.png";
import icon5 from "../Images/icon5.png";
const Modalconnect = () => {
  return (
    <>
      <div
        class="modal fade"
        id="Backdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                CONNECT WALLET
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">MetaMask</span>
                <img src={icon5} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">TrustWallet</span>
                <img src={icon3} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">MathWallet</span>
                <img src={icon1} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">Tokenpocket</span>
                <img src={icon3} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">Wallet Connect</span>
                <img src={icon1} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">Binance Smart Chain Wallet</span>
                <img src={icon3} alt="logo" className="float-end" />
              </div>
            </div>
            <div class="modal-body modal-bdy">
              <div className="connect-btn mt-1">
                <span className="float-start">Safepal Wallet</span>
                <img src={icon1} alt="logo" className="float-end" />
              </div>
            </div>
            <p className="bottom-text">
              <a
                href="https://docs.pancakeswap.finance/get-started/connection-guide"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-question-circle-o" aria-hidden="true"></i> Learn
                how to connect?{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalconnect;
