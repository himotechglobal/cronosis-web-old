import React from 'react'
import Header from '../../../Header'
import Footer from '../../Footer'
import Mintbalance from './Mintbalance'
import Mintdata from './Mintdata'

const Mint = () => {
  return (
    <>
      <div className="wrap-2">
        <Header/>
        <h1 className="redeem-heading">Mint</h1>
        <div className="redeem-div">
          {Mintdata.map((option) => {
            return <Mintbalance Mintdata={option} />;
          })}
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
        <Footer/>
      </div>
    </>
  )
}

export default Mint
