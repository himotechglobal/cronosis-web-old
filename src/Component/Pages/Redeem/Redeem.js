import React from "react";
import Header from "../../../Header";
import Footer from "../../Footer";
import Redeembalance from "../Redeem/Redeembalance";
import Redeemdata from "../Redeem/Redeemdata";

const Redeem = () => {
  return (
    <>
      <div className="wrap-2">
        <Header />
        <h1 className="redeem-heading">Redeem</h1>
        <div className="redeem-div">
          {Redeemdata.map((option) => {
            return <Redeembalance Redeemdata={option} />;
          })}
          <div className="fee">
            <div className="bag1">
              <p>Mint Fee</p>
              <p>Pool Balance</p>
              <p>Minimum Received</p>
              <p>Slippage</p>
            </div>
            <div className="bag2">
              <p>0.3%</p>
              <p>67,545.622 MMF</p>
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
        <Footer />
      </div>
    </>
  );
};

export default Redeem;
