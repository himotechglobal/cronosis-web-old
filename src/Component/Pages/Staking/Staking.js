import React from 'react'
import Header from '../../../Header'
import Footer from '../../Footer'
import { Link } from 'react-router-dom'
import icon8 from '../../../Images/icon8.png'
import icon9 from '../../../Images/icon9.png'
import icon11 from '../../../Images/icon11.png'
import icon12 from '../../../Images/icon12.png'
import icon1 from '../../../Images/icon1.png'

import Vest from './Vest'
const Staking = () => {
  return (
    <>
      <div className="wrap-2">
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="staking1">
                    <div className="staking">
                    <div className="bag-3">
                        <div className="staked-icon">
                              <img src={icon8} alt="" />
                        </div>
                        <h2>Total CROS Staked</h2>
                    </div>
                    <div className="bag-4">
                        <h2>881,046</h2>
                        <p>CROS</p>
                    </div>
                    </div>
                    <div className="staking">
                    <div className="bag-3">
                        <div className="staked-icon">
                              <img src={icon9} alt="" />
                        </div>
                        <h2>Total CROS Locked</h2>
                    </div>
                    <div className="bag-4">
                        <h2>881,046</h2>
                        <p>CROS</p>
                    </div>
                    </div>
                    <div className="staking">
                    <div className="bag-3">
                        <div className="staked-icon">
                              <img src={icon11} alt="" />
                              <img src={icon12} alt="" className='position'/>
                        </div>
                        <h2>Accumulated Fees</h2>
                    </div>
                    <div className="bag-4">
                        <h2>881,046</h2>
                        <p>MMF</p>
                    </div>
                    </div>
                    </div>
                    <div className="staking1">
                        <div className="stake">
                            <h4>STAKE CROS</h4>
                            <p>APR: <span className='green'>%</span></p>
                        </div>
                        <p>Stake FXM And Earn Platform Fees With No Lockup Period.</p>
                        <div className="wallet">
                        <div className="amount">
                            <p>Amount</p>
                            <div className="img-count">
                                <img src={icon1} alt="" />
                                <span>0.0</span>
                            </div>
                        </div>
                            <p>Wallet Balance: - CROS</p>
                        </div>
                        <div className="btnstake">
                        <button className='stakebtn'>Connect</button>
                        </div>
                    </div>
                    <div className="staking1">
                        <div className="stake">
                            <h4>STAKE CROS</h4>
                            <p>APR: <span className='green'>%</span></p>
                        </div>
                        <p className='pt-1 text'>Lock CROS And Earn Platform Fees And Penalty Fees In Unlocked CROS</p>
                        <p className='py-3 text'>The Lock Date Are Grouped By The Week. Any Lock Between Thursday 00:00 UTC To Wednesday 23:59 UTC Are Grouped In The Same Week Group, And Will Release At The Same Time Eight (8) Weeks Later.</p>
                        <p className='text'>Locked FXM Will Continue To Earn Fees After The Locks Expire If You Do Not Withdraw.</p>
                        <div className="wallet">
                        <div className="amount">
                            <p>Amount</p>
                            <div className="img-count">
                                <img src={icon1} alt="" />
                                <span>0.0</span>
                            </div>
                        </div>
                            <p>Wallet Balance: - CROS</p>
                        </div>
                        <div className="btnstake">
                        <button className='stakebtn'>Connect</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                  <div className="staking2">
                  <div className='staking'>
                   <div className='claim'>
                        <h2>
                        Claimable CROS
                        </h2>
                        <p>Include Staked CROS And Vested CROS</p>
                    </div>
                    <div className="claim-icon">
                       <img src={icon1} alt="" />
                       <span>-</span>
                       <span>CROS</span>
                       <p><Link to={'/'}>Claim</Link></p>
                    </div>  
                   </div> 
                  <div className='staking'>
                   <div className='claim'>
                        <h2>
                        CROS In Vesting
                        </h2>
                        <p>CROS Amount That Can Be Claimed With A <span className='penalty'>50% Penalty</span></p>
                    </div>
                    <div className="claim-icon">
                       <img src={icon1} alt="" />
                       <span>-</span>
                       <span>CROS</span>
                       <p><Link to={'/'}>Claim</Link></p>
                    </div>  
                   </div> 
                  <div className='staking'>
                   <div className='claim'>
                        <h2>
                        Claim All CROS Above
                        </h2>
                        <p>Early Exit Penalty</p>
                    </div>
                    <div className="claim-icon">
                       <img src={icon1} alt="" />
                       <span>-</span>
                       <span>CROS</span>
                       <p><Link to={'/'}>Claim With Penalty</Link></p>
                    </div>  
                   </div> 
                  <div className='staking'>
                   <div className='claim'>
                        <h2>
                        Expired Locked FXM
                        </h2>
                    </div>
                    <div className="claim-icon">
                       <img src={icon1} alt="" />
                       <span>-</span>
                       <span>CROS</span>
                       <p><Link to={'/'}>Withdraw</Link></p>
                    </div>  
                   </div> 
                  </div>
                  <Vest/>
                  <Vest/>
                  <Vest/>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Staking
